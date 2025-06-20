# Deep learning basics

Favourite sources to learn the basics!!

## Courses

| Course | link | topic | level |
|---|---|---|---|
| UMich | https://www.youtube.com/watch?v=QytpbYkGxKo&list=PLLhQgjrONLVFP1E7p2jWMMeM2FWUf2Qc7 | deep learning intro | beginner 
| 30 Days Deep Learning | https://github.com/patty-13/30_Days_Deeplearning | deep learning intro | beginner |
| Stanford CS 330: Deep Multi-Task and Meta Learning | https://cs330.stanford.edu/ | meta learning | intermediate |

## Coding sources

| Docs | link | topic | level |
|---|---|---|---|
| PyTorch docs | https://pytorch.org/tutorials/beginner/data_loading_tutorial.html | load data and train a model | beginner |
| PyTorch notebooks 'Deep Learning 1 (PyTorch)' | https://uvadlc-notebooks.readthedocs.io/en/latest/tutorial_notebooks/tutorial2/Introduction_to_PyTorch.html | Model types - ready to train, with explanations | multiple |

## Surveys

| Survey | task | level |
|---|---|---|
| A Survey of Deep Learning-based Object Detection | object detection | Intermediate |

## Models

| Model | paper | task | level | 
|---|---|---|---|
| Faster R-CNN | Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks | Object detection | Intermediate |

## Metrics

* F1 Score
* Accuracy
* ROC AUC
* Prec-Recall curve

## Other metrics
* Spearman’s rank correlation (not commonly used for deep learning)


## Layer types:

### Pooling
Pooling is a poor way to do dynamic routing. - https://www.lesswrong.com/posts/PQu2YPtcm2dQLSsu9/the-unreasonable-effectiveness-of-deep-learning


## Regularisation

### Early Stopping
Is used to stop the training if there is no improvement after a given number of events. 
Can be done actively: break training loop based on if condition: tracking of no improvement of last epochs or momentum.
Can be done passibely: save models based on best accuracy/loss

### Grokking
Grokking refers to the phenomenon of deep networks exhibiting a dramatic increase in test accuracy when training past the point where training accuracy is 100% - https://arxiv.org/pdf/2212.13881.pdf


## Bias

### Inductive bias 
Inductive bias refers to the set of assumptions that a model makes to predict outputs for inputs it has never seen.

## References
```{bibliography}
:filter: docname in docnames
```

