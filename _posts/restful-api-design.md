# **RESTful API Design**

## HTTP Status Codes and Their Related Interpretation

| Status Code | Meaning                                                      |
| ----------- | ------------------------------------------------------------ |
| **200**     | _OK_. The request went fine and the content requested was returned. This is normally used on `GET` request |
| **201**     | _Created_. The resource was created and the server has acknowledged it. It could be useful on responses to `POST` or `PUT` requests. Additionally, the new resource could be returned as part of the response body |
| **204**     | _No content_. The action was successful but there is no content returned. Useful for actions that do not require response body, such as a `DELETE` action. |
| **301**     | _Moved permanently_. This resource was moved to another location and the location is returned. This header is especially useful when `URLs`change over time (maybe due to a change on version, a migration, or some other disruptive change),keeping the old ones and returning a redirection to the new location allows old clients to update their references in their own time |
| **400**     | _Bad request_. The request issued has problems (might be lacking some required parameters, for example). A good addition to a 400 response might be an error message that a developer can use to fix the request. |
| **401**     | _Unauthorized_. Especially useful for authentication when the requested resource is not accessible to the user owning the request. |
| **403**     | _Forbidden_. The resource is not accessible, but unlike 401, authentication will not affect the response. |
| **404**     | _Not found_. The `URL` provided does not identify any resource. A good addition to this response could be a set of valid `URLs` that the client can use to get back on track (root URL, previous URL used, etc) |
| **405**     | _Method not allowed_. The HTTP verb used on a resource is not allowed. For instance doing a `PUT` on a resource that is `read-only` |
| **500**     | _Internal server error_. A generic error code when an unexpected condition is met and the server crashes. Normally, this response is accompanied by an error message explaining what went wrong. |
