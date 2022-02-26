# Kubernetes

Kubernetes consists of service discovery, load balancing, storage orchestration, automated rollouts and rollbacks to run applications.

Service discovery is a way to get configuration information from the runtime environment.

Before we deploy the containerized application, we need to create a Kubernetes cluster.

A kubelet runs on each node in the cluster. 

Container runtime, kubelet and kube-proxy processes must be installed in every node.

The kubelet makes sure that containers are running in a Pod.

The container runtime is the software that is responsible for running containers.

The first step using Kubernetes is to create a Pod that hosts the application Docker container.

Kubernetes runs the application by placing containers into Pods to run on Nodes.

A node may be a virtual or physical machine, depending on the cluster.

Each node has multiple application pods with containers running on that node.

The components on a node include the kubelet, a container runtime, and the kube-proxy.

A Pod represents a set of running containers on your cluster.

Each Pod is meant to run a single instance of a given application.

A Pod's contents are always co-located and co-scheduled, and run in a shared context.

Docker is commonly known runtime, and it helps to describe Pods.

Pod is similar to a group of Docker containers with shared namespaces and shared filesystem volumes.

The one container per Pod model is the most common Kubernetes use case.

A service defines a set of pods and a means by which to access pods.

An application is exposed on a network.

Applications running in a Kubernetes cluster find and communicate with the outside world, through the Service abstraction.

Application running inside container can be accessed through Ingress by routes from the outside world to the service.

NodePort exposes the service on each Node’s IP adress at a static port.

Each Pod is assigned a unique IP address for each address family.

## Deploying a containerized web application

Package a web application into a Docker image.

Dockerfile contains instructions on how the image is built.

Push the Docker image to a Docker registry.

Create a Kubernetes cluster.

Kubernetes represents applications as Pods, which are scalable units holding one or more Docker containers.

Kubernetes objects are described in manifests called Kubernetes YAML files.

Deploy the web application to the cluster by Kubernetes YAML file.

To deploy the web application, use the kubectl apply command.

The following script is an example of a Deployment.

```

apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 1
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:latest
        ports:
        - containerPort: 80

```
One deployment Pod contains only one Docker container: the web application by Docker image.

While Pods do have an assigned IP addresses, those IPs can only be reached from inside your cluster.

Services group Pods into one static IP address, reachable from any Pod inside the cluster.

The Replicas has numbers of Pods each of which runs the web application.

Create a Service object that exposes the deployment.

Google’s Container Engine (GKE) is easy way to use Kubernetes in the cloud.

```

apiVersion: apps/v1

kind: Deployment
metadata:
  name: web-deployment
  namespace: default
spec:
  selector:
    matchLabels:
      run: web
  template:
    metadata:
      labels:
        run: web
    spec:
      containers:
      - image: docker.io/containers/web-app:1.0
        imagePullPolicy: IfNotPresent
        name: web
        ports:
        - containerPort: 8080
          protocol: TCP

```
Google Kubernetes Engine supports Ingress and Load Balancing for a publicly accessible applications.

To expose a Kubernetes service outside the cluster, create a service of type LoadBalancer.

Traffic from the external load balancer is directed to the backend Pods.

Expose the web application to the Internet.

You expose the web application deployment to the Internet using a service of type LoadBalancer.

Expose an external IP address to access the web application in a Cluster.

An application such Nginx is ready to serve traffic on the Internet using a public IP.

Now that the web application Pods are exposed to the Internet through a Kubernetes service, you can open a browser page, and navigate to the Service IP address.

The web application responds to all requests with the message on port 8080.

where <EXTERNAL_IP_ADDRESS> is the external IP address (LoadBalancer Ingress) of your service, and <PORT> is the value of Port in your service description.

Configure load balancing and port forwarding to access applications in a cluster.

Kubernetes Service is an abstraction which defines a logical set of Pods running in the cluster.

```

apiVersion: v1

kind: Service
metadata:
  name: nginx
  labels:
    run: nginx
spec:
  type: NodePort
  ports:
  - port: 8080
    targetPort: 80
    protocol: TCP
    name: http
  - port: 443
    protocol: TCP
    name: https
  selector:
    run: nginx

```
k3d is a utility designed to run K3s in Docker.

The following diagram shows an example of a cluster (k3s) that has a single node K3s server for Kubernetes deployment.

![alt text](https://github.com/jylhakos/DevOpsWithDocker/blob/main/3/3.8/k3s.png?raw=true)

### References

Rancher Documentation

https://rancher.com/docs/rancher/v2.5/en/overview/architecture/

A lightweight Kubernetes (k3s)

https://k3s.io/

A link to k3d to run k3s

https://k3d.io/
