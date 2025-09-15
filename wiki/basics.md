# Basics of a neural network




## Features
Sources: self-written, {cite:p}`olah2017feature`
In order to understand how to disentangle a network, we need to understand how a convolutional neural network (CNN) learns. The first convolutional layer(s) learn features such as edges and simple textures. Later convolutional layers learn features such as more complex textures and patterns. The last convolutional layers learn concepts such as objects or parts of objects. The fully connected layers learn to connect the activations from the high-level features to the individual classes to be predicted.

The statistics of the training data influences the interaction of neurons in a channel. A single channel doesn’t represent a concept understandable by human beings. An unknown amount of channels may learn a single concept together, or many concepts are learned by one channel.


Feature concepts in a CNN can be derived from a range of units, such as individual neuron, channels, entire layers, class logit and class probability.


High level features extracted by deep neural networks contain abstract content information

low level features from shallow layers contain textual and spatial information

early layers: style features
late layers: content features


Positive and negative activations are unrelated, multiple neurons might learn very similar features and for many of the features, no equivalent human concepts are available.


Focusing on understanding/visualising individual neurons would be a horrendous time-consuming and difficult interpretable task due to the high amount of neurons in a network. 

Focusing on channels seems more promising but still comes with the limitation of the complex interaction. 








## Latent space interpretation
Sources: https://www.sciencedirect.com/science/article/pii/S0010482521009057
The latent space of a convolutional neural network refers to the compressed representation of the input image. Disentanglement representation of the latent space aims to model salient factors of variation in the data independently [52]. 
The latent space is used to uncover the salient factors of variation learned in the data with respect to the clinical knowledge. Visualization of high-dimensional latent space in two dimensions to identify similarities and outliers.


