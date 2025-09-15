# Create a sparse network

## Definition
Sources: self-written
A sparse network has "useless" weights that can in the next step be pruned and important weights. A common way to achieve sparsity is using loss functions.

## Methods

### Regularisation 
Sources: {cite:p}`he2023structured`, {cite:p}`zhan2019directed`

Regularization can be used for learning structured sparse networks by adding different sparsity regularizers. 
Regularistaion can be applied through batch norm parameters, extra parameters or filters.


Examples:
- Lasso
- Group Lasso 

L1 Regularization (Lasso) adds an L1 penalty to the model’s weights, pushing some weights to zero. This encourages simpler, sparser models, especially effective for feature selection.

Group Lasso regularization is commonly used to sparsify filters in a structured manner. It can effectively zero out all weights in groups, thus filter-wise group lasso would zero out a whole filter and then the filter is removed from the convolution layer. Group Lasso extends Lasso to enforce sparsity across groups of weights. Ideal for inducing structured sparsity, as it encourages whole groups (e.g., layers or neurons) to be sparse.
