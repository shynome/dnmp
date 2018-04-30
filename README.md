- init docker
  - `curl https://get.docker.com/ | sh`
  - `service start docker`

```sh
docker volume create --opt type=none --opt device=/web --opt o=bind web && \
docker run -d --name dnmp -v /var/run/docker.sock:/var/run/docker.sock -v web:/web shynome/dnmp && \
docker exec -ti dnmp sh
```
