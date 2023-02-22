# M02 | W05

## Asynchronous Control Flow

## Topics to cover

- [x] 1. What is the Internet?
- [x] 2. TCP/IP
- [x] 3. HTTP/HTTPS

### 1. What is the Internet?
---
The Internet is a global system of interconnected computer networks that uses the Internet protocol suite (TCP/IP) to communicate between networks and devices.

It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies.

[Here is a really cool video on the History of the internet](https://www.youtube.com/watch?v=9hIQjrMHTv4), if you are interested ;)

#### Client-Server Model

In most cases that concern us, every piece of communication over the internet involves a client and a server.

- **The client** is responsible of performing requests to a server, and receiving/managing the response sent back from the server.

- **The server** is responsible of always be listening for potential incoming requests from clients, and respond back accordingly.

### 2. TCP/IP
---

The Internet protocol suite (_commonly known as TCP/IP_) is a framework for organizing the set of communication protocols used in the Internet and similar computer networks.

The Internet protocol suite provides end-to-end data communication specifying how data should be packetized, addressed, transmitted, routed, and received. This functionality is organized into four abstraction layers, which classify all related protocols according to each protocol's scope of networking.

![TCP IP Model](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/UDP_encapsulation.svg/525px-UDP_encapsulation.svg.png)

<a href="https://www.youtube.com/watch?v=keeqnciDVOo">Here is a good video to review the internet protocol suite.</a>

#### IP Addresses

The Internet Protocol defines unique identifiers for each device on a network (computer, tablet, phone, security camera, etc.) These are called IP Addresses.

Typically your device will be assigned one by your local router, so that it can be identified and easily communicate both with the router and other local devices in the home or office. Beyond that, your modem / router will usually be assigned an external address for interfacing for the world wide web at large.

Standard formats include:

- IPv4: 192.168.11
- IPv6: 2001:db8:3333:4444:5555:6666:7777:8888

Note that because IPv4 maximum number of unique addresses caps between four and five billion, we've had need for IPv6 and its incredible multi-undecillion count of possible addresses.

#### Ports

A client connects to a specific server through an IP Address, but that server can be running dozens or hundreds of programs. 

**In order to avoid confusion as to which network response is intended for which program, applications will listen only on specific ports**.

There are 65,356 ports available; ports 0 to 1023 are more well-known, considered standard system ports (they often require superuser priveleges on Unix-based systems.)

You can use any port number that you like, but if that port number is already being used by another program, you'll run into an error.

Try using port numbers going from 3000 and above to avoid falling into a port number already taken.

#### Standarized Ports

To help out developers of both hardware and software alike, there are many standardized ports that are expected for certain types of applications and certain types of web traffic:

- 20 FTP data transfer (File Transfer Protocol)
- 21 FTP commands
- 22 SSH / SFTP (Secure SHell / Secure File Transfer Protocol)
- 25 Simple Mail Transfer Protocol sending mails (SMTP)
- 53 DNS (Domain Name System)
- 80 HTTP (HyperText Transfer Protocol)
- 110 POP3 receiving mails (Post Office Protocol)
- 194 IRC (Internet Relay Chat)
- 443 HTTPS (HyperText Transfer Protocol Secure) over TLS (Transport Layer Security) or SSL (Secure Socket Layer)
- 5432 PG (PostgreSQL)
The above are just the tip of the iceberg when it comes to the ports used by the device you're on right now! However, as it pertains to a web developer, we often only need to worry about a small handful of these.

This is just an extra fact that you may find helpful when choosing a port number to work with.

### 3. HTTP/HTTPS
---

The Hypertext Transfer Protocol (HTTP) is an application-layer protocol _(Because it goes on top of the TCP/IP Model)_ for transmitting hypermedia documents, such as HTML.

It was designed for communication between web browsers and web servers, but it can also be used for other purposes.

HTTP **utilizes TCP for client-server communication** and operates based on a **HTTP Request / HTTP Response cycle**.

The server is reponsible of listening for incoming http requests that a client can perform. Clients are responsible of performing http requests to a server. 

#### URL

Stands for "Uniform Resource Locator". It is the address of a given unique resource on the Web.

![URL](https://github.com/C-Shi/lhl-flex-lecture/blob/842f1219a19b3109e48bdf1cf22779d8c5f0a359/module_2/tcp_and_http/image/url.png?raw=true)

#### Request methods

Clients can perform different types of requests to servers. The most common [HTTP Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) are the following:

1. **GET** - to read resources
2. **HEAD** - identical to GET, but without the response body
3. **POST** - to write resources
4. **PUT/PATCH** - to update resources
5. **DELETE** - to delete resources

#### Response Status

[HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

##### 100's Range: Informational
    1. 100 CONTINUE
    2. 101 SWITCHING PROTOCOLS
    3. 102 PROCESSING

##### 200's Range: Successful
    1. 200 OK
    2. 201 CREATED
    3. 202 ACCEPTED

##### 300's Range: Redirection
    1. 301 MOVED PERMANENTLY
    2. 302 FOUND

##### 400's Range: Client error
    1. 400 BAD REQUEST
    2. 401 UNAUTHORIZED
    3. 404 NOT FOUND

##### 500's Range: Server error
    1. 500 INTERNAL SERVER ERROR

