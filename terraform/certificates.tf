resource "aws_acm_certificate" "this" {
  domain_name       = "www.arthurrobine.fr"
  validation_method = "DNS"

  tags = {
    Name = "SSL certificate for www.arthurrobine.fr"
  }
}

output "acm_validation_dns" {
  value = aws_acm_certificate.this.domain_validation_options
}
