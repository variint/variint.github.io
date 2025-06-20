# Modular Networks

## Introduction

### Description
A modular neural network is composed of functions (modules) that can be combined to solve a given task.

### Goals
* Learn about explicit and implicit modularity in neural networks.
* Learn about evolutionary origins of modular networks.



### Motivation for modular networks
* Model complexity reduction
* Robistness
* Scalability
* Computational Efficency
* Interpretability

Original version: {cite}`azam2000biologically`
<!--
### Biologically Inspired Modular Neural Networks
* Original version: PhD Thesis: Biologically Inspired Modular Neural Networks - https://vtechworks.lib.vt.edu/bitstream/handle/10919/27998/etd.pdf
-->


## Implicitly introduced modularity
Modules emerge from a non-modular network.


### Loss functions
* L1 loss (sparsity)
* Distance loss (distance penalty)
* Enmasment loss (module-wise penalty)
* Perceptual loss (similar feature map penalty)


### Finding modules
* Circuit discovery
* Clustering of neurons
* Graph drawing
* Graph NN
* positive vs negative activation analysis




### Brain-Inspired Modular Training

* Original version: Seeing is Believing: Brain-Inspired Modular Training for Mechanistic Interpretability (Liu, 2023) - https://arxiv.org/abs/2305.08746, https://github.com/KindXiaoming/BIMT

* can use L1 or L2 penalty
* we have neuron layers (ni) and weight layers (wi)
* input: n0, output: nL
* $r_{i,j}$ is the neuron position in Y-axis i and X-axis j
* each index on the Y-axis represents a single layer
* the definition of j, p, q, k may differ between the paper and my graphics

```{figure} _static/images/drawio/bimt_biolinear.png
---
height: 300px
name: directive-fig
align: center
---
Connection between pixels in Biolonear2D filters (3D setup - [m, n, Y])
```

```{figure} _static/images/drawio/bimt_neuron_biolinear.png
---
height: 300px
name: directive-fig
align: center
---
Connection between Biolonear2D filters (3D flattened setup - [X=m*n, Y])
```

```{figure} _static/images/drawio/bimt_geometry.png
---
height: 300px
name: directive-fig
align: center
---
Geometrical space (2D setup - [X, Y)])
```

```{figure} _static/images/drawio/bimt_neuron.png
---
height: 300px
name: directive-fig
align: center
---
A neuron and incoming/outgoing weights (2D setup - [X, Y])
```


### Neural Sculpting
Neural sculpting is an iterative pruning and clustering concept.
* Original version: https://proceedings.neurips.cc/paper_files/paper/2023/file/3b1675de6b49cc00084374213f8c38ae-Paper-Conference.pdf


### Modular sparsification
CRESPR: Modular sparsification of DNNs to improve pruning performance
and model interpretability - Cluster-Restricted Extreme Sparsity Pruning of Redundancy (CRESPR) in DNN


## Explicitly introduced modularity

### Capsule networks



## Hierarchical Graph Drawing, Sugiyama

Review
* Original version: https://cs.brown.edu/people/rtamassi/gdhandbook/chapters/hierarchical.pdf

Tabu search
* Original version: https://link.springer.com/chapter/10.1007/0-387-33416-5_3

 Tabu search is often benchmarked against other metaheuristic methods — such as simulated annealing, genetic algorithms, ant colony optimization algorithms, reactive search optimization, guided local search, or greedy randomized adaptive search. 


## Evolution and biology

### Life and Death of a Neuron

* Original version: Brain Basics: The Life and Death of a Neuron - https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-life-and-death-neuron

### Baldwin Effect
Evolution tends to select individuals who already (by effect of random mutations) have some of the useful features that would otherwise be learned. 
Better accepted than the theory of direct assimilation of lifetime modification by evolutionary mechanisms.
The morphology and behaviour of neurons is similar across animals. 
Evolution of the brain mainly occurred on the architecture level or connectivity of neural networks.
Something about that neurons don't really change by evolution - similar across mammals - but the architecture changes + the connectivity of neurons. Something with strength of connectivity between the neurons.
{cite}`floreano2008bio`

The Baldwin effect, Lamarck's theory of evolution, Darwinian evolution, and Waddington's genetic assimilation. All the theories offer explanations of how organisms respond to a changed environment with adaptive inherited change. - https://en.wikipedia.org/wiki/Baldwin_effect


<!--
## Other stuff

### Libertarian Free Will: Neuroscientific and Philosophical Evidence

#### Information as pattern decoding
https://www.youtube.com/watch?v=IfjSzRsPmsI

THIS IS COPIED FROM THE YOUTUBE VIDEO!!!

* information and (downward) informational causation is fundamentally realized in and is about *patterns* of energy,
not amounts of energy.

* it makes sense to reduce global forces to the sum of local forces, and total amounts to the sum of local parts’ amounts

* this kind of reductionism does not make sense at all for patterns. Reductionism of global patterns to local parts of patterns and to local particle interactions fails as a program because patterns are inherently relational over space, time, and other dimensions (e.g. color relationships, social relationships, and so on).

That is, patterns and relationships are not localistic.

Patterns cannot be reduced to a level below the level where the relationships that a decoder
responds to are present, or the pattern of relationships to which a decoder is sensitive
will be lost.

But if an act of decoding can trigger a change in a physical system, say a neuron that is
tuned to a face detects a face in the visual input and then fires, thereby influencing
other neurons, then reductionistic physicalism won’t work at all, because then even non-informational
causal chains, say among local particles, become influenced by global energetic relationships.


That is, once patterns and information become causal in the universe, because of the evolution
of decoders, like neurons, that do things if patterns are present, like fire or trigger
behaviors of animals in the world, then reductionistic physicalism fails.

It requires understanding how decoders trigger other decoders, and also how decoders reparameterize
each other for possible future acts of now altered decoding.


The technical word for energetic relationships is phase (e.g., a sine and cosine wave of
the same amplitude and frequency have a phase difference of ninety degrees).
Spatial phase arises from spatial relationships (i.e. patterns), and is related to the everyday
idea of shape.

Temporal phase is related to the idea of timing.

mass, momentum, wavelength or position.




###  What is Conciousness


conciousness is flexible but slow, automation is fast and energy saving




### Revolution of the Mind: Inspirations and Resources
https://www.garethmlong.com/blog/d14nmw7v91vczeez29fl9dq6dkwfc2


-->



## References
```{bibliography}
:filter: docname in docnames
```