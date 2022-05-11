# Tactable - Backend Challenge
Follow up interview solution for backend question.

#File Descriptions:
- Interfaces.ts file:
	Todo interface created with parameters set for data retrieval from the 
rest call to https://jsonplaceholder.typicode.com/todos
	Client interface created with one method called ‘fetchData’ with a promise object to make it asynchronous. 
	IApiManager interface created with one method called ‘fetchData’ with a promise object to make it asynchronous. 

- Types.ts file:
	InversifyJS needs to use the type as identifiers at runtime. A new symbol gets created in the global symbol registry for the Client and IApiManager variables referencing the key.

- Inversify.config.ts file:
	A container is created to get all implementations of the interfaces and inject dependencies for coupling. 

- Entities.ts file:
	TodoClient and ApiManager classes are created to implement the declared interfaces. TodoClient utilizes axios to make a HTTP request from node to  https://jsonplaceholder.typicode.com/todos in order to return the data promised to the Client class. ApiManager uses the Client identifier to define the data gotten from the link, while the fetchData function runs independently to retrieve the data from the link and then runs it through the implemented client interface.

- index.ts file:
	A container is created, which uses the IApiManager constructor to identify and inject its dependencies into the container. The data fetched is then logged.

- Entities.test.ts:
	A unit test is performed on the TodoClient class where it is mocked to for 2 tests. The first is to see if a request is made to the right link and then the mock is reset before another test to see if data is returned is done. This is verified by checking to see if ‘todos’ is referenced.

- Integration.test.ts
	An integration test is done to see if the client is injected properly, by spying on the container to see if ‘todos’ is referenced at runtime.

# How to Run: 
- npm install
- npm test (To run all test suites)
- npm start (To make the call to the Api)
