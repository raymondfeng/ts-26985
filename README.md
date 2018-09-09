This monorepo is created to reproduce https://github.com/Microsoft/TypeScript/issues/26985.

# Steps

```sh
npm i
npm run build
```

Now check `packages/pkg3/dist/keys.d.ts`, and you'll see the generated code is invalid.

```ts
import { MetadataAccessor } from "@raymondfeng/pkg2";
export declare const ADMIN: MetadataAccessor<boolean, import("../../pkg2/node_modules/@raymondfeng/pkg1/dist/types").IdType>;
//# sourceMappingURL=keys.d.ts.map
```
