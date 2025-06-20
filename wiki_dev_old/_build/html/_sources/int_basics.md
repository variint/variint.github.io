# Interpretablility

## Introdcution

## Design choices

### Description accuracy vs. description length tradeoff
When desigining an interpretability metric, one has to consider two factors: the description length (amount of information) and the description accuracy (goodness of system approximation). A system (e.g. neural network) is the most accurate description of itself, but has a long description length. 
Source: https://www.alignmentforum.org/posts/64MizJXzyvrYpeKqm/sparsify-a-mechanistic-interpretability-research-agenda


## Metrics
How to analyse whether an interpretability method is "good".

### Sanity checks for measuring faithfullness
The faithfulness of a metric is defined by providing the true explanation of the model’s behaviours. 

* Original work: https://www.nature.com/articles/s41598-024-58121-8
Example for a sanity check of the explanation: An experiment with random parameters is performed - examine how much the set of critical neurons in the random model differs from the proposed model.
The Jaccard similarity index is computed for the set of critical neurons (JI: non-zero) vs other neurons (JI: zero).
This suggests, extracted neurons are correctly explaining the behavior of the network.

