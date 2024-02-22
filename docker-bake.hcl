variable "version" {
  default = "latest"
}

variable "repo" {
  default = "chinayin/ping"
}

group "default" {
  targets = ["release"]
}

function "platforms" {
  params = []
  result = ["linux/amd64", "linux/arm64"]
}

variable "registry" {
  default = "docker.io"
}

variable "repository" {
  default = "${registry}/${repo}"
}

target "_all_platforms" {
  platforms = platforms()
}

target "release" {
  inherits = ["_all_platforms"]
  context  = "."
  tags     = [
    "${repository}:${version}",
    "${repository}:latest"
  ]
}
