import json


def lambda_handler(event, context):
    # 1 parse out query strings
    transactionId = event['queryStringParameters']['transactionId']
    transactionType = event['queryStringParameters']['type']
    transactionAmount = event['queryStringParameters']['amount']

    print(transactionId, transactionType, transactionAmount)
    # 2 construct body of response object
    transactionResponse = {}
    transactionResponse['transactionId'] = transactionId
    transactionResponse['transactionType'] = transactionType
    transactionResponse['transactionAmount'] = transactionAmount
    transactionResponse['message'] = 'Hello World'

    # 3 construct http response object
    responseObject = {}
    responseObject['statusCode'] = 200
    responseObject['headers'] = {}
    responseObject['headers']['Content-Type'] = 'application/json'
    responseObject['body'] = json.dumps(transactionResponse)

    # 4 return response
    return responseObject
