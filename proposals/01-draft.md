# Draft

## Abstract

Provides basic draft for `Boris routes` implementation

## Proposal

Needs to provide uniform API for declaring routes and different impelementations based on existed frontend routers
List of routers:  
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [react-router](https://www.npmjs.com/package/react-router)
* [vue-router](https://www.npmjs.com/package/vue-router)
* [unversal-router](https://www.npmjs.com/package/universal-router)
* [rlite-router](https://www.npmjs.com/package/rlite-router)

The idea is implement `Boris component` with specific routing implementation

### Application side
```
/
  boris.json|yaml - component declaration

```
#### Boris.json

```
{
  "type": "router",
  "platforms": {
    "web": "boris:react-router-dom"
    // or
    "web": "./custom_implementation"
  }
}
```

### Library side

```
/
  sirob.json|yaml
```

#### Sirob.json

```
{
  "name": "router",
  "platform": "web",
  "id": "boris:react-router-dom"
}
```

## API

TODO

## Changelog

Date | Change | Autor
--- | --- | ---
2019-07-09 | Initial version | Guro Bokum <jiojiajiu@gmail.com>
