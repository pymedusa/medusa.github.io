workflow "Validate on push" {
  on = "push"
  resolves = ["Validate", "Lint"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Validate" {
  uses = "nuxt/actions-yarn@master"
  args = "run validate"
  needs = ["Install"]
}

action "Lint" {
  uses = "nuxt/actions-yarn@master"
  args = "run xo"
  needs = ["Install"]
}
