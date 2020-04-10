# rf-service-fe

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Development

This app needs at least 2 other to be fully working. Starting everything without using helm chart from rf-service repo needs changes in `axios.defaults.baseURL` to define port and hostname of other services. You can start them as docker containers:
```
docker run -it --rm -p 5000:5000 mwcislo/rf-service:0.x.0
docker run -it -p 8090:8090 -v /tmp:/tmp -v Caddyfile:/etc/caddy/caddyfile jumanjiman/caddy:v1.0.0-20190503T1915-git-b0fca0c -conf /etc/caddy/caddyfile
```

Example working Caddyfile:
```
    # Bind address
    :8090

    tls off
    log stdout
    errors stderr

    # After this line, all other paths are relative to root.
    root /tmp
    browse /

    rewrite /caddy/ {
      to /{file} /
    }
    upload /uploads {
      to "/tmp"
    }
```

## References

### Articles

[Robot Framework library for testing Kubernetes](https://devopsspiral.com/articles/k8s/robotframework-kubelibrary/)

[Testing on kubernetes - rf-service](https://devopsspiral.com/articles/k8s/robotframework-service/)

[Intro to Vue.js. Testing on kubernetes - rf-service frontend.](https://devopsspiral.com/articles/k8s/robotframework-service-fe/)

### Repositories

[KubeLibrary](https://github.com/devopsspiral/KubeLibrary)

[rf-service](https://github.com/devopsspiral/rf-service)