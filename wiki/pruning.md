# Network pruning

- keywords: regularisation, granularity, scheduling, criteria, evaluation, structured vs unstructured


## Definitions
Sources: {cite:p}`hoefler2021sparsity`
Selectively pruning components reduces the size of neural networks.



## Hypothesis

### Lottery ticket hypothesis
Sources: {cite:p}`radhakrishnan2022mechanism`
The “lottery ticket hypothesis” refers to the claim that a randomly-initialized neural network contains a sub-network that can match or outperform the trained network when trained in isolation.



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
Sources: {cite:p}`hubens2020pruning`, {cite:p}`he2023structured`, table generated with chat-gpt

Examples:
	- Weight Magnitude = Filter Norm
	- Filter Correlation
	- Gradient Magnitude 
	- Taylor expansion
	- Mutual information


| **Pruning Criterion**          | **Depends on Weights**  | **Depends on Gradients**                     | **Requires Input Data**  |
| ------------------------------ | ----------------------  | ------------------------------------------   | -----------------------  |
| Weight Magnitude (Filter Norm) | ✅ Yes                  | ❌ No                                       | ❌ No                    |
| Filter Correlation             | ✅ Yes                  | ❌ No                                       | ❌ No                    |
| Gradient Magnitude             | ❌ No                   | ✅ Yes                                      | ✅ Yes                   |
| Taylor Expansion               | ✅ Yes                  | ✅ Yes                                      | ✅ Yes                   |
| Mutual Information             | ❌ No                   | ❌ No (but usually computed on activations) | ✅ Yes                   |




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
