locals {
  s3_origin_id   = "${var.s3_name}-origin"
  s3_domain_name = "${var.s3_name}.s3-website-${var.region}.amazonaws.com"
}

resource "aws_cloudfront_origin_access_identity" "this" {
  comment = "OAI for accessing S3 bucket ${var.s3_name}"
}

resource "aws_cloudfront_distribution" "this" {
  enabled = true
  default_root_object = "index.html"
  aliases = ["www.arthurrobine.fr"]

  origin {
    origin_id   = local.s3_origin_id
    domain_name = aws_s3_bucket.this.bucket_regional_domain_name
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.this.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    target_origin_id = local.s3_origin_id
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]

    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
    }

    min_ttl     = 0
    default_ttl = 0
    max_ttl     = 0
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:630595552729:certificate/e955e257-68cd-4e26-b948-bb147ecf7782"
    ssl_support_method   = "sni-only"
    minimum_protocol_version = "TLSv1.2_2019"
  }

  price_class = "PriceClass_200"
}
