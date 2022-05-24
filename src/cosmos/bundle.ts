import * as _235 from "./auth/v1beta1/auth";
import * as _236 from "./auth/v1beta1/genesis";
import * as _237 from "./auth/v1beta1/query";
import * as _238 from "./authz/v1beta1/authz";
import * as _239 from "./authz/v1beta1/event";
import * as _240 from "./authz/v1beta1/genesis";
import * as _241 from "./authz/v1beta1/query";
import * as _242 from "./authz/v1beta1/tx";
import * as _243 from "./bank/v1beta1/authz";
import * as _244 from "./bank/v1beta1/bank";
import * as _245 from "./bank/v1beta1/genesis";
import * as _246 from "./bank/v1beta1/query";
import * as _247 from "./bank/v1beta1/tx";
import * as _248 from "./base/abci/v1beta1/abci";
import * as _249 from "./base/kv/v1beta1/kv";
import * as _250 from "./base/query/v1beta1/pagination";
import * as _251 from "./base/reflection/v1beta1/reflection";
import * as _252 from "./base/reflection/v2alpha1/reflection";
import * as _253 from "./base/snapshots/v1beta1/snapshot";
import * as _254 from "./base/store/v1beta1/commit_info";
import * as _255 from "./base/store/v1beta1/listening";
import * as _256 from "./base/tendermint/v1beta1/query";
import * as _257 from "./base/v1beta1/coin";
import * as _258 from "./capability/v1beta1/capability";
import * as _259 from "./capability/v1beta1/genesis";
import * as _260 from "./crisis/v1beta1/genesis";
import * as _261 from "./crisis/v1beta1/tx";
import * as _262 from "./crypto/ed25519/keys";
import * as _263 from "./crypto/multisig/keys";
import * as _264 from "./crypto/secp256k1/keys";
import * as _265 from "./crypto/secp256r1/keys";
import * as _266 from "./distribution/v1beta1/distribution";
import * as _267 from "./distribution/v1beta1/genesis";
import * as _268 from "./distribution/v1beta1/query";
import * as _269 from "./distribution/v1beta1/tx";
import * as _270 from "./evidence/v1beta1/evidence";
import * as _271 from "./evidence/v1beta1/genesis";
import * as _272 from "./evidence/v1beta1/query";
import * as _273 from "./evidence/v1beta1/tx";
import * as _274 from "./feegrant/v1beta1/feegrant";
import * as _275 from "./feegrant/v1beta1/genesis";
import * as _276 from "./feegrant/v1beta1/query";
import * as _277 from "./feegrant/v1beta1/tx";
import * as _278 from "./genutil/v1beta1/genesis";
import * as _279 from "./gov/v1beta1/genesis";
import * as _280 from "./gov/v1beta1/gov";
import * as _281 from "./gov/v1beta1/query";
import * as _282 from "./gov/v1beta1/tx";
import * as _283 from "./mint/v1beta1/genesis";
import * as _284 from "./mint/v1beta1/mint";
import * as _285 from "./mint/v1beta1/query";
import * as _286 from "./params/v1beta1/params";
import * as _287 from "./params/v1beta1/query";
import * as _288 from "./slashing/v1beta1/genesis";
import * as _289 from "./slashing/v1beta1/query";
import * as _290 from "./slashing/v1beta1/slashing";
import * as _291 from "./slashing/v1beta1/tx";
import * as _292 from "./staking/v1beta1/authz";
import * as _293 from "./staking/v1beta1/genesis";
import * as _294 from "./staking/v1beta1/query";
import * as _295 from "./staking/v1beta1/staking";
import * as _296 from "./staking/v1beta1/tx";
import * as _297 from "./tx/signing/v1beta1/signing";
import * as _298 from "./tx/v1beta1/service";
import * as _299 from "./tx/v1beta1/tx";
import * as _300 from "./upgrade/v1beta1/query";
import * as _301 from "./upgrade/v1beta1/upgrade";
import * as _302 from "./vesting/v1beta1/tx";
import * as _303 from "./vesting/v1beta1/vesting";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._235, ..._236, ..._237 };
  }
  export namespace authz {
    export const v1beta1 = { ..._238, ..._239, ..._240, ..._241, ..._242 };
  }
  export namespace bank {
    export const v1beta1 = { ..._243, ..._244, ..._245, ..._246, ..._247 };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._248 };
    }
    export namespace kv {
      export const v1beta1 = { ..._249 };
    }
    export namespace query {
      export const v1beta1 = { ..._250 };
    }
    export namespace reflection {
      export const v1beta1 = { ..._251 };
      export const v2alpha1 = { ..._252 };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._253 };
    }
    export namespace store {
      export const v1beta1 = { ..._254, ..._255 };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._256 };
    }
    export const v1beta1 = { ..._257 };
  }
  export namespace capability {
    export const v1beta1 = { ..._258, ..._259 };
  }
  export namespace crisis {
    export const v1beta1 = { ..._260, ..._261 };
  }
  export namespace crypto {
    export const ed25519 = { ..._262 };
    export const multisig = { ..._263 };
    export const secp256k1 = { ..._264 };
    export const secp256r1 = { ..._265 };
  }
  export namespace distribution {
    export const v1beta1 = { ..._266, ..._267, ..._268, ..._269 };
  }
  export namespace evidence {
    export const v1beta1 = { ..._270, ..._271, ..._272, ..._273 };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._274, ..._275, ..._276, ..._277 };
  }
  export namespace genutil {
    export const v1beta1 = { ..._278 };
  }
  export namespace gov {
    export const v1beta1 = { ..._279, ..._280, ..._281, ..._282 };
  }
  export namespace mint {
    export const v1beta1 = { ..._283, ..._284, ..._285 };
  }
  export namespace params {
    export const v1beta1 = { ..._286, ..._287 };
  }
  export namespace slashing {
    export const v1beta1 = { ..._288, ..._289, ..._290, ..._291 };
  }
  export namespace staking {
    export const v1beta1 = { ..._292, ..._293, ..._294, ..._295, ..._296 };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._297 };
    }
    export const v1beta1 = { ..._298, ..._299 };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._300, ..._301 };
  }
  export namespace vesting {
    export const v1beta1 = { ..._302, ..._303 };
  }
}
