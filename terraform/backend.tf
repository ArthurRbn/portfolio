terraform {
  backend "s3" {
    bucket         = "terraform-state-portfolio"
    key            = "state/terraform.tfstate"
    region         = "eu-west-3"
    dynamodb_table = "terraform-locks"
  }
}
