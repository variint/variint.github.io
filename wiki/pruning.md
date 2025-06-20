# Network pruning

- keywords: regularisation, granularity, scheduling, criteria and evaluation of pruning.


## Definitions
Sources: {cite:p}`hoefler2021sparsity`
Selectively pruning components reduces the size of neural networks.
 

## Hypothesis

### Lottery ticket hypothesis
Sources: {cite:p}`radhakrishnan2022mechanism`
The “lottery ticket hypothesis” refers to the claim that a randomly-initialized neural network contains a sub-network that can match or outperform the trained network when trained in isolation.


## Methods

### Regularisation
Sources: {cite:p}`he2023structured`, {cite:p}`zhan2019directed`

Regularization can be used for learning structured sparse
networks by adding different sparsity regularizers.

Examples:
- Group Lasso 


Group Lasso regularization is commonly used to sparsify filters in a structured manner. It can effectively zero out all weights in groups, thus filter-wise group lasso would zero out a whole filter and then the filter is removed from the convolution layer


### Granularity
Sources: {cite:p}`hubens2020pruning`

Granularity is the groups to be pruned.
Examples: 
- Weight pruning
- Group pruning
- Kernel pruning
- Filter pruning


### Scheduling
Sources: {cite:p}`hubens2020pruning`

You have to choose when you will remove the weights.
Examples: 
- One-shot Pruning
- Iterative Pruning
- Automated Gradual Pruning

### Criteria
Sources: {cite:p}`hubens2020pruning`, {cite:p}`he2023structured` 

Examples:
- Weight Magnitude = Filter Norm
- Gradient Magnitude
- Filter Correlation
- Taylor expansion
- Mutual information

### Evaluation
Sources: {cite:p}`hubens2020pruning`

Examples:
- Theoretical Speedup
- Compression Ratio


## Pipelines

### Optimal Brain Damage
Sources: {cite:p}`hubens2020pruning`


###  Optimal Brain Surgeon
Sources: {cite:p}`hubens2020pruning`



## References
```{bibliography}
:filter: docname in docnames
```
