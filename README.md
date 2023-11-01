# Angular 100 Remote Repo

This repo has been built for the purposes of findind, developing and testing a solution to help improve Nx's performance and resource management for repositories with a large number of remotes.

## Info

The tests will be:

1. Being able to serve the host application with 100 static remotes

This should be achievable by running:

`nx serve shell`


2. Being able to serve 3 dev remotes with the host application and 97 static remotes

This should be achievable by running:

`nx serve shell --devRemotes=remote11,remote21,remote31`
