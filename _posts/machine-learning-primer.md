---
title: Machine Learning Primer
---
# Machine Learning : Preliminaries

> *The __computational complexity__ of machine learning methods is of interest to the computer scientist since what is produced are __algorithms__. Looking to apply these methods to very large datasets, algorithms with high-degree polynomial complexity in the size of the dataset (or worse) become problematic. We will be concerned with two forms of complexity: **complexity of training** and **complexity of the models application***



> *We are going to loosely define learning as meaning **getting better at some task through practice***

This basic definition leads to a couple vital questions:

- *How does the computer know whether it is getting better or not?*
- *How does it know how to improve?*



## Types of Machine Learning

- ##### __Supervised learning__:

  - A __training set__ of examples with the correct responses (__targets__) is provided and, based on this training set, the algorithm __generalizes__ to respond correctly to all possible inputs. This is also called learning from **exemplars**.

- __Unsupervised learning__:

  - Correct responses are not provided, but instead the algorithm tries to identify similarities between the inputs so that inputs that have something in common are __categorized__ together. The statistical approach to unsupervised learning is known as __density estimation__.

- __Reinforcement learning__:

  - This is somewhere between supervised and unsupervised learning. The algorithm gets told when the answer is wrong, but does not get told how to correct it. It has to explore and try out different possibilities until it works out how to get the answer right. Reinforcement learning is sometimes called learning with a __critic__ because of this monitor that scores the answer, but does not suggest improvements.

- __Evolutionary learning__:

  - Biological evolution can be seen as a learning process: biological organisms adapt to improve their survival rates and chance of having offspring in their environment. We'll look at how we can model this in a computer, using an idea of __fitness__, which corresponds to a score for how good the current solution is.

## Supervised Learning

> As discussed we have a set of data (the __training data__ ,$T$ ) that consists of a set of __input__ data that has __target__ data, which is the answer that the algorithm should produce.

$$
{\huge T\{(\vec{x}_i,\vec{t}_i)\}}{\large: \vec{x}_i {\text{is the input, } \vec{t}_i{\text{is the target}}}}
$$

###### Regression

This is a statistical concept that attempts to fit a mathematical function describing a curve, so that the curve passes as close as possible to all the data points. This generally becomes a problem of **function approximation** or **interpolation** (i.e,. working out the values between values that we know).
$$
{\large \text{Regression}: \mathbb{R^{n}}\to\mathbb{R}}
$$

###### Classification

The classification problem consists of taking input vectors and deciding which of $\mathcal{N}$ classes they belong to, based on training from __exemplars__ of each class.  The key concept of classification is that it is **discrete** -- each example belongs to precisely one class, and the set of classes covers the whole possible output space.

While _classifiers_ may use very different methods for learning the class mapping, in essence they all aim to do the same thing: find **decision boundaries** that can be used to separate out the different classes.
$$
{\large \text{Classification}: \mathbb{R^{n}}\to  \alpha_i \in\{\alpha_1,\alpha_2,\alpha_3... \alpha_{\mathcal{N}}\} }
$$

## The Machine Learning Process

- __Data Collection and Preparation__
- __Feature Selection__
- __Algorithm Choice__
- __Parameter and Model Selection__
- __Training__
- __Evaluation__



---



## Some Terminology

- __Inputs__: An input vector is the data given as one input to the algorithm. Written as $\bf{x}$, with elements $x_i$, where $i$ runs from $1$ to the number of input dimensions, $m$.
  - The input vector will typically be several numbers, $\text{e.g.,} (0.2,0.45,0.75,-0.3)$. The size of the vector, i.e, the number of elements in the vector, is called the _dimensionality_ of the input. This is because plotting the input would require one dimension of space for each of the different elements of the vector
- __Weights__: $w_{ij}$, are the __weighted connections__ between nodes $i$ and $j$. For neural networks these weights are analogous to the synapses in the brain. They are arranged into a matrix $\bf{W}$.
- __Outputs__: The output vector is $\bf{y}$, with elements $y_j$, where $j$ runs from $1$ to the number of output dimensions, $n$. We can write $\bf{y(x,W)}$ to remind ourselves that the output depends on the inputs to the algorithm and the current set of weights of the network.
- __Targets__: The target vector $\bf{t}$, with elements $t_j$, where $j$ runs from $1$ to the number of output dimensions, $n$, are the extra data that we need for supervised learning, since they provide the 'correct' answers that the algorithm is learning about.
- __Activation Function__: For neural networks, $g(\cdot)$ is a mathematical function that describes the firing of the neuron as a response to the weighted inputs, such as the _threshold function_.
- __Error__: $\it{E}$, a function that computes the inaccuracies of the network as a function of the outputs $\bf{y}$ and targets $\bf{t}$.

> The __Curse of Dimensionality__ is a a very strong name ... the essence of the curse is the realization that as the number of dimensions increases, the volume of the __unit hypersphere__ does not increase with it.
>
> This will apply to our machine learning algorithms because as the number of input dimensions gets larger, we will need more data to enable the algorithm to generalize sufficiently well.
