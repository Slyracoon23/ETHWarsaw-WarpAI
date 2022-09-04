mnist_brain running on Warp Smart Contracts ETHWARSAW Submission
===========
Recognizing hand-written digits from MNIST dataset with Brain.js running on Warp Smart Contracts.

### Live example

[Live Website of MNIST dataset with Brain.js](http://linux.ria.ua/mnist_brain/nnTest.html)

### Quiqk start

Git clone the repository and run the following commands:

```bash
git clone https://github.com/ApelSYN/mnist_brain
```
change directory to mnist_brain

```bash
cd mnist_brain
```
The trained model has already been added to the repository and saved in the./data/mnistTrain.json file. It is deployed to the smart contract and can be used immediately. To run the example, run the following command:
```bash
yarn run deploy model:local
```


It was created using the train.js script. You don't have to repeat these steps again. 

Open the nnTest.html page in your browser (the example will work if your browser supports the HTML canvas tag)
```bash
http-server ./ -p 8080
```

### Prepare

If you want to train a neural network with its own settings. You will need to modify the data for the minst digits library. By default, only 10,000 records of the training sample are loaded into it. You can download all **60 000** using the [minst_dl] package(https://github.com/ApelSYN/mnist_dl)
```javascript
net.train(trainingSet,
    {
        errorThresh: 0.001,  // error threshold to reach
        iterations: 20000,   // maximum training iterations
        log: true,           // console.log() progress periodically
        logPeriod: 1,       // number of iterations between logging
        learningRate: 0.3    // learning rate
    }
```
You can slightly reduce the learningRate and pass more examples to the trainingSet. Be prepared for the fact that the system will be trained for hours and maybe days.

### Development

To develop your own warp neural networks cd to the smart-contract directory.

```bash
cd smart-contract
```

*NOTE*: You need to understand how [warp smart-contracts](https://academy.warp.cc/) work.


### Future plans
Since this hackathon idea was created in a hurry, there are a lot of things we wanted to do. I plan to add the following features:

* Add more neural networks js libaries (TensorFlow.js, Keras.js, etc.)
* Add more datasets (CIFAR-10, etc.)
* Add model training on the smart contract
* Add a web interface for training models

More complicated ideas:
* Use Onnx standard to convert AI models to a standard format
* Implement ONNX runtime native WASI or C-api bindings for performing inferences on ONNX models
* Use Warp Wasm based smart-contracts to encapsulate the ONNX runtime and perform inferences on ONNX models

### Reasoning behind the idea:

The idea is to make running AI models easy and accessible to everyone. Using Warp smart-contracts allows any user to run AI models without having to install any software or libraries. The user only needs a web browser. Warp/smartweave have advanages over other smart-contract platforms. 

Firstly, there are techical advatages. It is able to do lazy-evaluation that can off-load computation and provides native solutions for massive data storage. 

Secondly, Warp smart-contracts are written in JavaScript (with WASM support) and can run in any browser without any addition dependecies. 

Lastly, Warp smart-contracts can be deployed to the Arweave permaweb. This allows users to run AI models without having to trust a third party. The user can run the smart-contract on their own computer and verify that the smart-contract is doing what it is supposed to do. This approach invite more people to interoperate with the smart-contract and build new applications on top of it.

