# 🕉 @sensethenlove/jwt


### 🙏 Description
Node and/or Edge helper functions to create JWK's & create & verify JWT's w/ the subtle crypto api (ECDSA)


### ☯️ Install
```bash
pnpm add @sensethenlove/jwt
pnpm add buffer # only necessary if edge (browser) (cloudflare workers)
```

### 💛 Example: Create public & private jwk
The public & private jwk will log in the terminal, then we put them in our `.env` file
```ts
import { createJWKs } from '@sensethenlove/jwt'

createJWKs()
```


### 🧡 Example: Create jwt
```ts
import { Buffer } from 'buffer/' // edge
import { Buffer } from 'node:buffer' // node
import { createJWT } from '@sensethenlove/jwt'
import { JWK_PRIVATE } from '$env/static/private'

const jwtPayload = { userId: 1 }
const expiresInAsSeconds = 32400 // 9 hours
const jwt = await createJWT(jwtPayload, expiresInAsSeconds, JWK_PRIVATE, Buffer)
```

### 💚 Example: Decode jwt
```ts
import { Buffer } from 'buffer/' // edge
import { Buffer } from 'node:buffer' // node
import { decodeJWT } from '@sensethenlove/jwt'

const decoded = decodeJWT(jwt, Buffer)
```

### 💜 Example: Verify jwt
```ts
import { Buffer } from 'buffer/' // edge
import { Buffer } from 'node:buffer' // node
import { verifyJWT } from '@sensethenlove/jwt'
import { JWK_PUBLIC } from '$env/static/private'

const payload = await verifyJWT(jwt, JWK_PUBLIC, Buffer)
```

### 💖 Our helpful packages!
* [@sensethenlove/slug](https://www.npmjs.com/package/@sensethenlove/slug)
* [@sensethenlove/toast](https://www.npmjs.com/package/@sensethenlove/toast)
* [@sensethenlove/env-write](https://www.npmjs.com/package/@sensethenlove/env-write)
* [@sensethenlove/global-style](https://www.npmjs.com/package/@sensethenlove/global-style)
* [@sensethenlove/svelte-modal](https://www.npmjs.com/package/@sensethenlove/svelte-modal)
* [@sensethenlove/loop-backwards](https://www.npmjs.com/package/@sensethenlove/loop-backwards)
* [@sensethenlove/svelte-turnstile](https://www.npmjs.com/package/@sensethenlove/svelte-turnstile)
