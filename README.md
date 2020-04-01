# image-carousel


## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [CRUD API](#crud%20api)

## Related Projects

  - https://github.com/MntOlympus/reviews
  - https://github.com/MntOlympus/reservations
  - https://github.com/MntOlympus/photos

## Usage
<br/>
<br/>

## Requirements
<br/>
<br/>

## CRUD API

### Get the photos of a property

```
GET /api/propertyPhotos/:id
```

#### Response
The response `photos` will be a JSON object

`Status: 200 OK`
```
{
    "photos": [ 
      sampleUrl.photo1.com,
      sampleUrl.photo2.com,
      sampleUrl.photo3.com,
      sampleUrl.photo4.com,
      sampleUrl.photo5.com,
      sampleUrl.photo6.com,
    ]
}
```
<br/>

### Create a new property and it's photos

```
POST /api/propertyPhotos
```

#### Parameters
The request body `data` will includes a property that encode details of the rental listing.
| Name | Type | Description |
| ---- | ---- | ----------- |
| data | object | **Required** The data of the new database record. Should include an array of photos. |


#### Data properties
| Name | Type | Description |
| --- | --- | --- |
| `photos` | `array` |  Array of the homes photos |

#### Example input
```
{
  photos: [ 
      sampleUrl.photo1.com,
      sampleUrl.photo2.com,
      sampleUrl.photo3.com,
      sampleUrl.photo4.com,
      sampleUrl.photo5.com,
      sampleUrl.photo6.com,
    ]
}
```
<br/>

### Update a listing
```
PATCH /api/propertyPhotos/:id
```

Updates the listing with the `id` in the request body.

#### Parameters
The request body `data` will include 3 items: the home id, the index of the photos array which needs to be updated, as well as the new image URL.

Other items in the photos array will keep their original URL values.

| Name | Type | Description |
| --- | --- | --- |
| `id` | `number` | **Required** The id of the home to be updated |
| `photoIndex` | `number` | The index in photo array to be replaced |
| `newUrl` | `string` | The new url to be updated |

#### Example input
```
{
  id: 13,
  photoIndex: 3,
  newURL: 'aws.com.bucket/photo45'
}
```

#### Response
The response `property` will return the newly updated property entry as a JSON object.

`Status: 200 OK`
```
{
    "id": 13,
    "photos": [ 
      "sampleUrl.photo1.com",
      "sampleUrl.photo2.com",
      "sampleUrl.photo3.com",
      "aws.com.bucket/photo45",
      "sampleUrl.photo5.com",
    ]
}
```

<br/>

### Delete a listing
```
DELETE /api/propertyPhotos/:id
```

Deletes the property with the `id` in the request body.

#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| `id` | `number` | **Required** The id of the property to be deleted |

#### Example input
```
{
  id: 83
}
```

#### Response
`Status: 200 OK`
