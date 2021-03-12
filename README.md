# AS-Latin1
**Latin1 Decoder/Encoder Written For AssemblyScript**

## About
- AssemblyScript Compatible
- Minimal Code
- Works In Browser And Node
- Very Fast

## Installation
```bash
~ npm install as-latin1 --save
```

## Usage

**Basic Usage**
```js
import { encode, decode } from 'as-latin1'

const encoded = encode('Hello World 🌎')
//=> ʚHello World ʬ

const decoded = decode(encoded)
//==> Hello World 🌎
```

## API

### encode(data: string) -->> string
Encode String Into HEX Format

### decode(data: string) -->> string
Decode HEX Back Into String