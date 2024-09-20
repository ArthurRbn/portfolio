terraform {
  backend "s3" {
    bucket         = "terraform-state-portfolio"
    key            = "state/terraform.tfstate"
    dynamodb_table = "terraform-locks"
  }
}
