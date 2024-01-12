# Network pruning

## Introduction

### Goals
* Learn about sparse vs dense networks.
* Learn about the difference of local and global pruning.
* Learn about the difference of structured and unstructured pruning.

## Pruning types

### Structured Pruning
Structured pruning removes entire filters of neural networks. {cite}`he2023structured`



### Weight dependent
* Filter norm
* Filter correlation

### Activation-based

### Mutual information

### Taylor expansion


## Ranking

The distribution of the low ranking filters is interesting. Most of the filters pruned are from the deeper layer. Here is a peek of which filters were pruned after the first iteration - https://jacobgil.github.io/deeplearning/pruning-deep-learning

## References
```{bibliography}
:filter: docname in docnames
```