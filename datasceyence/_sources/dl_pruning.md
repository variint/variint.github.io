# Network pruning

## Introduction

### Goals
* Learn about sparse vs dense networks.
* Learn about the difference of local and global pruning.
* Learn about the difference of structured and unstructured pruning.

<!-- Sparsity in Deep Learning: Pruning and growth for efficient inference and training in neural networks -->

## Regularisation
Regularisation can be used for learning structured sparse networks by adding regularisers.

Sparsity regulariser can be applied to batch norm parameters, learnable gates or directly to filters.

### Group Lasso
Group lasso can be used to sparsify filters in a structured manner.




## Granularity


### Unstructured pruning
Unstructured Pruning removes connections (weights). Requires specific hardware or library support for realistic accelearation. {cite}`he2023structured`

### Structured pruning
Structured pruning removes entire filters of neural networks. {cite}`he2023structured`

#### Filter-wise pruning

#### Channel-wise pruning

#### Group-wise pruning

#### Stripe-wise pruning

#### Kernel Pruning / Grouped Kernel
* progressive kernel pruning (PKP)

#### Pattern-based

#### Block-wise



## Importance Metric

{cite}`Molchanov2017`


### Minimum weight
* Magnitude of kernel weights
* Simplest criterion

### Activation
* ReLU activation is sparse. We can assume, that a small activation value is not important

### Mutual information
* Measure of how much information is present in two different kernels. 
* Information gain is the reduction in entropy or surprise.

### Taylor expansion
* Optimisation problem

<!--The distribution of the low ranking filters is interesting. Most of the filters pruned are from the deeper layer. Here is a peek of which filters were pruned after the first iteration - https://jacobgil.github.io/deeplearning/pruning-deep-learning
-->

* Magnitude
* Clustering
* PCA
* cross-channel correlation


* channel independence


* Original version: Pruning Convolutional Neural Networks for Resource Efficient Inference



### Weight dependent
#### Filter norm
Uses a single filter, no input data needed {cite}`he2023structured`

all kind of mean the same: norm, length, magnitude, distance

* L0 norm = Hamming distance
* L1 norm = Manhattan distance
* L2 norm = Euclidean distance
* Linf = Chebyshev distance

#### Filter correlation
Compares multiple filter in a layer, no input data needed

Filter correlation follows the "smaller-norm-less-informative" assumption. Finds redundant filters by exploiting relationships among filters of the same layer. {cite}`he2023structured`

* Filter pruning via Geometric Median: Filters close to the geometric median are considered to be redundant
* RED: Scalar hashing on weights in each layer. Redundant filters are merged based on relative similarity of filters. Uneven depthwise separation technique for pruning.
* Correlation-based pruning
* Structural redundancy reduction


### Activation-based
* needs input data

### Mutual information

### Taylor expansion

* Original version: Importance Estimation for Neural Network Pruning




### Least absolute shrinkage and selection operator (Lasso)
* performs variable selection and regularisation.
* LASSO identifies the variables that are strongly associated with the response variable.
* LASSO adds penalty to the absolute values of the regression coefficients, which can force some coefficients to be exactly zero.
* LASSO is used when you want a sparse model.

### Hessian Matrix


## Scheduling


* One-shot Pruning
* Iterative Pruning


* Original version: https://nathanhubens.github.io/posts/deep%20learning/2020/05/22/pruning.html


## Evaluation 


* Compression Ratio = total_params/nonzero_params

* Theoretical Speedup = total_flops/nonzero_flops
Speedup uses flops



* Original version: https://nathanhubens.github.io/posts/deep%20learning/2020/05/22/pruning.html


## Other

* The “lottery ticket hypothesis” refers to the claim that a randomly-initialized neural network contains a sub-network that can match or outperform the trained network when trained in isolation - https://arxiv.org/pdf/2212.13881.pdf

<!--
Email: 
Before answering you question, I would like to clarify the terms that are employed in my work to avoid any ambiguity (there is often a lot of confusion in literature). When I speak about pruning, it means « physically » remove the parameters from the network, leading to a change in its architecture. If the parameters are still there, but are zeroed out or masked, I use the term sparsifying. Also, I use the term filter to designate a full convolution filter in a layer (i.e. a 3d tensor) , each of those filters being composed of kernels (i.e. 2d tensors).

To answer your question, doing kernel-level pruning cannot really be achieved as, if you are removing some kernels in each filter, and that there are no correspondance between them, there is no way to « physically » remove them without messing with the architecture.

A way that I found to overcome this is by pruning what I called shared-kernels, which are corresponding kernels that are shared between all filters in a layer. By doing so, you can then prune the kernels. You can find a visual explanation in my library FasterAI: https://nathanhubens.github.io/fasterai/core.granularity.html#d-blocks-3

In practice, pruning shared-kernels in a layer has the same impact on the architecture as pruning filters. The only difference is on the decision of which parameter to prune, that can depend on the choice of granularity. To convince you, please take a look at the very last figure of the following article. You will see that if we remove a filter in layer i , we should then remove the corresponding feature map, and then the corresponding kernels in layer i+1. You can then look at it the other way around, if we would like to remove shared-kernels in layer i+1, we also should remove the corresponding feature map in the previous layer and thus the corresponding filter.

-->


<!-- 
 What is the benefits of Pruning neural networks ?

    Model Size Reduction: Pruning reduces the number of parameters in a neural network, resulting in a smaller and more compact model. This reduction in model size is especially important for deployment on resource-constrained devices with limited memory and computational power.
    Computation Efficiency: Smaller models require fewer computations during both training and inference, leading to faster execution times. This is crucial for real-time applications and services.
    Memory Efficiency: Pruning reduces the memory footprint of a model, making it more feasible to store and use on devices with limited RAM, such as smartphones and edge devices.
    Energy Efficiency: Smaller, pruned models typically consume less energy during inference, which is essential for battery-powered devices and environmentally conscious computing.
    Improved Generalization: Pruning can act as a form of regularization, helping to prevent overfitting by removing unnecessary model capacity. This can lead to better generalization to unseen data.
    Reduced Overhead: Smaller models require less time and computational resources for training, which can result in cost savings for training large-scale neural networks.
    Deployment Flexibility: Pruned models are easier to deploy, especially in scenarios where hardware resources are limited or fixed. They can be deployed more quickly and efficiently.
    Interpretability: Simpler, pruned models can be more interpretable because they have fewer parameters and connections, making it easier to understand their decision-making processes.
    Transferability: Pruning can improve the transferability of models. Smaller models are often more transferable across different tasks and domains, making them suitable for transfer learning.
    Scalability: Pruning can be applied at various stages of a model's development, from initial training to fine-tuning, allowing for iterative model optimization.
    Compatibility: Pruned models are often more compatible with hardware accelerators and specialized inference engines because they have fewer parameters and computational requirements.

    https://www.linkedin.com/pulse/traditional-pruning-methods-impact-model-size-speed-ayoub-kirouane%3FtrackingId=qYgy2xKNQre96IOm%252BsppAQ%253D%253D/?trackingId=qYgy2xKNQre96IOm%2BsppAQ%3D%3D
    
-->



## References
```{bibliography}
:filter: docname in docnames
```