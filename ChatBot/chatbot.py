import random
import json
import pickle
import numpy as np
import nltk
from flask import Flask,redirect,request,jsonify,url_for
from flask_cors import CORS, cross_origin


from nltk.stem import WordNetLemmatizer
from keras.models import load_model

lemmatizer = WordNetLemmatizer()
intents = json.loads(open('intents.json').read())

words = pickle.load(open('words.pkl', 'rb'))
classes = pickle.load(open('classes.pkl', 'rb'))
model = load_model('chatbot_model.h5')


def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word) for word in sentence_words]
    return sentence_words

def bag_of_words (sentence):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for w in sentence_words:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1
    return np.array(bag)

def predict_class (sentence):
    bow = bag_of_words (sentence)
    res = model.predict(np.array([bow]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]

    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({'intent': classes [r[0]], 'probability': str(r[1])})
    return return_list

def get_response(intents_list, intents_json):
    tag = intents_list[0]['intent']
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if i['tag'] == tag:
            result = random.choice (i['responses'])
            break
    return result

print("GO! Bot is running!")

## below code is for running and chatting on console
# while True:
#     message = input("")
#     ints = predict_class (message)
#     res = get_response (ints, intents)
#     print (res)


# Creating an enadpoint to get the call from front end 
## To resolve the cors issue, need to install cors and steps are below - 
## pip3 install -U flask-cors
## Error while calling the api - Need to resolve this in the backend - ReactJS: has been blocked by CORS policy: Response to preflight request doesn't pass access control check
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/chatbot',methods = ['POST'])
@cross_origin()
def chatbot():
    content = request.get_json()
    print("Testing-->",content,type(content))
    message = content["text"]
    ints = predict_class (message)
    res = get_response (ints, intents)
    return {"response":res}


def startServer():
    app.run(host='0.0.0.0', debug=False, threaded=True, port=5000)
    # print('Chat bot server is up and running')

##### main ####
if __name__ == '__main__':
    startServer()