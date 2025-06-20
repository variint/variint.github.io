# Sparsity

## Introduction

### Loss functions
* L1 Regularization (Lasso)
Adds an L1 penalty to the model's weights, pushing some weights to zero. This encourages simpler, sparser models, especially effective for feature selection.

* Group Lasso
Extends Lasso to enforce sparsity across groups of weights. Ideal for inducing structured sparsity, as it encourages whole groups (e.g., layers or neurons) to be sparse.

* Elastic Net
Combines L1 and L2 regularization, balancing sparsity with a bit of weight shrinkage. Often used when variables are correlated and some sparsity is still desired.

* KL Divergence for Sparse Activations
Encourages sparse activations by penalizing deviations from a set target sparsity. It’s popular in sparse autoencoders and helps control the average activation level of neurons.

* Hoyer’s Sparsity Loss
Measures sparsity by comparing the L1 norm to the L2 norm of weights or activations. Effective in enforcing highly sparse representations in deep learning.

* Orthogonal Matching Pursuit (OMP)
Iteratively selects non-zero coefficients to fit sparse representations, frequently used in sparse coding and dictionary learning to create concise, interpretable feature maps.

* Total Variation (TV) Loss
Common in image processing, this loss encourages smooth, sparse gradients in images, which helps reduce noise and artifacts.

* Spike-and-Slab Prior (Bayesian Sparsity)
A Bayesian approach that uses a mixture of Gaussian and delta functions to enforce sparsity in model weights, though it can be computationally intensive.

* Entropy-based Sparsity Loss
Reduces the entropy of activations, leading to sparse, focused neuron responses. Effective for tasks where it’s beneficial for only a small subset of neurons to be highly active.

* Binary Masking with Straight-Through Estimator (STE)
Masks weights with binary values (0 or 1) and uses an estimator to allow gradient flow. Often used in quantization-aware training to force weights to become sparse and discrete.



## Future work
* Choosing better sparsity penalties than L1 
* Addressing feature suppression 


## References
```{bibliography}
:filter: docname in docnames
```