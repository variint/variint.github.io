# Network pruning


## Hypothesis

### Lottery ticket hypothesis
The “lottery ticket hypothesis” refers to the claim that a randomly-initialized neural network contains a sub-network that can match or outperform the trained network when trained in isolation - {cite:p}`radhakrishnan2022mechanism`


## Methods

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

### Regularisation
Sources: {cite:p}`he2023structured`

Regularization can be used for learning structured sparse
networks by adding different sparsity regularizers.

Examples:
- Group Lasso regularization is commonly used
to sparsify filters in a structured manner.

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



```{bibliography}
:filter: docname in docnames
```