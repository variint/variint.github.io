# Network pruning

## Introduction

### Goals
* Learn about sparse vs dense networks.
* Learn about the difference of local and global pruning.
* Learn about the difference of structured and unstructured pruning.

<!-- Sparsity in Deep Learning: Pruning and growth for efficient inference and training in neural networks -->

## Granularity

### Structured Pruning
Structured pruning removes entire filters of neural networks. {cite}`he2023structured`

### Kernel Pruning

* progressive kernel pruning (PKP)



## Importance Metric

The distribution of the low ranking filters is interesting. Most of the filters pruned are from the deeper layer. Here is a peek of which filters were pruned after the first iteration - https://jacobgil.github.io/deeplearning/pruning-deep-learning


### Weight dependent
* Filter norm
* Filter correlation

### Activation-based

### Mutual information

### Taylor expansion




## Scheduling


* One-shot Pruning
* Iterative Pruning


* Original version: https://nathanhubens.github.io/posts/deep%20learning/2020/05/22/pruning.html


## Evaluation 

* Compression Ratio = total_params/nonzero_params

* Theoretical Speedup = total_flops/nonzero_flops

* Original version: https://nathanhubens.github.io/posts/deep%20learning/2020/05/22/pruning.html


<!--
Email: 
Before answering you question, I would like to clarify the terms that are employed in my work to avoid any ambiguity (there is often a lot of confusion in literature). When I speak about pruning, it means « physically » remove the parameters from the network, leading to a change in its architecture. If the parameters are still there, but are zeroed out or masked, I use the term sparsifying. Also, I use the term filter to designate a full convolution filter in a layer (i.e. a 3d tensor) , each of those filters being composed of kernels (i.e. 2d tensors).

To answer your question, doing kernel-level pruning cannot really be achieved as, if you are removing some kernels in each filter, and that there are no correspondance between them, there is no way to « physically » remove them without messing with the architecture.

A way that I found to overcome this is by pruning what I called shared-kernels, which are corresponding kernels that are shared between all filters in a layer. By doing so, you can then prune the kernels. You can find a visual explanation in my library FasterAI: https://nathanhubens.github.io/fasterai/core.granularity.html#d-blocks-3

In practice, pruning shared-kernels in a layer has the same impact on the architecture as pruning filters. The only difference is on the decision of which parameter to prune, that can depend on the choice of granularity. To convince you, please take a look at the very last figure of the following article. You will see that if we remove a filter in layer i , we should then remove the corresponding feature map, and then the corresponding kernels in layer i+1. You can then look at it the other way around, if we would like to remove shared-kernels in layer i+1, we also should remove the corresponding feature map in the previous layer and thus the corresponding filter.

-->



## References
```{bibliography}
:filter: docname in docnames
```