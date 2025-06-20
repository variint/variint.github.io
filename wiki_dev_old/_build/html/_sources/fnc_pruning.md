# Network pruning

## Introduction

### Key takeaways
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



## Importance Metric / Pruning Conditions

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

## Other

### Magnitude-Based Pruning
- **Definition**: Prunes weights or neurons based on their magnitude.
- **Condition**: Weights or neurons with values below a certain threshold are removed.
- **Usage**: Simple and effective; commonly used to prune less significant weights or neurons.

### L1 Norm Pruning
- **Definition**: Prunes weights or neurons based on the L1 norm of their values.
- **Condition**: Weights or neurons with the smallest L1 norm are removed.
- **Usage**: Useful for creating sparse models by removing less influential components.

### L2 Norm Pruning
- **Definition**: Prunes weights or neurons based on the L2 norm of their values.
- **Condition**: Weights or neurons with the smallest L2 norm are removed.
- **Usage**: Helps in reducing redundancy and focusing on more significant weights.

### Gradient-Based Pruning
- **Definition**: Prunes weights or neurons based on the gradient of their loss function.
- **Condition**: Weights or neurons with the smallest gradients are removed.
- **Usage**: Targets components with the least impact on the model’s training process.

### Variance-Based Pruning
- **Definition**: Prunes weights or neurons based on their variance.
- **Condition**: Weights or neurons with low variance in their activations are removed.
- **Usage**: Identifies and removes components that contribute minimally to the model’s variability.

### Activation-Based Pruning
- **Definition**: Prunes weights or neurons based on their activation levels.
- **Condition**: Weights or neurons with activations below a certain threshold are removed.
- **Usage**: Focuses on components that have minimal impact on the output activations.

### Connection Pruning
- **Definition**: Prunes entire connections between layers based on their importance.
- **Condition**: Connections with the lowest importance scores (e.g., based on magnitude or gradient) are removed.
- **Usage**: Reduces complexity by removing less significant connections.

### Structured Pruning
- **Definition**: Prunes entire structures, such as filters or channels, instead of individual weights.
- **Condition**: Entire structures with low importance or contribution to performance are removed.
- **Usage**: Helps in maintaining efficiency while reducing the model size.

### Sparse Regularization
- **Definition**: Uses regularization techniques to induce sparsity in the model.
- **Condition**: Regularization terms in the loss function encourage sparsity in weights or activations.
- **Usage**: Integrates pruning into the training process by promoting sparsity.

### Dynamic Pruning
- **Definition**: Prunes weights or neurons dynamically during the training process.
- **Condition**: Components are pruned based on their performance metrics or importance, which can change over time.
- **Usage**: Allows for adaptive pruning based on the evolving training state.

### Sensitivity-Based Pruning
- **Definition**: Prunes components based on their sensitivity to perturbations in the input data.
- **Condition**: Components that show minimal sensitivity to input variations are removed.
- **Usage**: Focuses on retaining components that are crucial for robust performance.



### Weight Sparsity
- **Definition**: Measures the proportion of zero weights in the pruned model.
- **Formula**: \[ \text{Weight Sparsity} = \frac{\text{Number of zero weights}}{\text{Total number of weights}} \]
- **Usage**: Indicates the extent to which weights have been removed, with higher values suggesting greater sparsity.

### Model Compression Ratio
- **Definition**: Ratio of the size of the pruned model to the size of the original model.
- **Formula**: \[ \text{Compression Ratio} = \frac{\text{Size of pruned model}}{\text{Size of original model}} \]
- **Usage**: Evaluates the reduction in model size due to pruning, with lower ratios indicating more effective compression.

### Accuracy Drop
- **Definition**: Measures the change in model performance (accuracy) due to pruning.
- **Formula**: \[ \text{Accuracy Drop} = \text{Accuracy}_{\text{original}} - \text{Accuracy}_{\text{pruned}} \]
- **Usage**: Assesses the impact of pruning on the model’s predictive performance, with smaller drops indicating better preservation of accuracy.

### FLOPs Reduction
- **Definition**: Measures the reduction in the number of floating-point operations (FLOPs) after pruning.
- **Formula**: \[ \text{FLOPs Reduction} = \frac{\text{FLOPs}_{\text{original}} - \text{FLOPs}_{\text{pruned}}}{\text{FLOPs}_{\text{original}}} \]
- **Usage**: Evaluates the computational efficiency gained through pruning, with higher reductions indicating more effective pruning.

### Parameter Reduction
- **Definition**: Measures the reduction in the total number of parameters due to pruning.
- **Formula**: \[ \text{Parameter Reduction} = \frac{\text{Number of parameters}_{\text{original}} - \text{Number of parameters}_{\text{pruned}}}{\text{Number of parameters}_{\text{original}}} \]
- **Usage**: Indicates how much the model size has been reduced by pruning, with higher reductions suggesting more aggressive pruning.

### Model Latency
- **Definition**: Measures the change in the time required for the model to make predictions after pruning.
- **Formula**: \[ \text{Model Latency} = \text{Latency}_{\text{pruned}} - \text{Latency}_{\text{original}} \]
- **Usage**: Assesses the impact of pruning on inference time, with lower latencies indicating improved efficiency.

### Memory Footprint
- **Definition**: Measures the reduction in the memory required to store the pruned model.
- **Formula**: \[ \text{Memory Footprint} = \frac{\text{Memory}_{\text{original}} - \text{Memory}_{\text{pruned}}}{\text{Memory}_{\text{original}}} \]
- **Usage**: Evaluates how pruning affects the memory usage of the model, with higher reductions indicating more efficient memory utilization.

### Reconstruction Error
- **Definition**: Measures the error between the original model's outputs and those of the pruned model on the same inputs.
- **Formula**: \[ \text{Reconstruction Error} = \frac{1}{N} \sum_{i=1}^N \|f_{\text{original}}(x_i) - f_{\text{pruned}}(x_i)\| \]
- **Usage**: Assesses how well the pruned model approximates the behavior of the original model, with lower errors indicating better preservation of the original model’s functionality.

### Efficiency Metrics
- **Definition**: Assesses the trade-off between efficiency gains (e.g., speed, memory) and the loss of accuracy due to pruning.
- **Formula**: Efficiency metrics can be domain-specific and may involve a combination of FLOPs reduction, latency, and accuracy drop.
- **Usage**: Provides a holistic view of the effectiveness of pruning in terms of efficiency versus accuracy.

### Sensitivity Analysis
- **Definition**: Measures the model’s sensitivity to pruning, i.e., how pruning affects different parts of the model.
- **Formula**: Typically involves evaluating performance changes with various levels of pruning.
- **Usage**: Helps understand which layers or components of the model are more sensitive to pruning and may guide more targeted pruning strategies.



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