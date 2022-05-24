import * as _192 from "./applications/transfer/v1/genesis";
import * as _193 from "./applications/transfer/v1/query";
import * as _194 from "./applications/transfer/v1/transfer";
import * as _195 from "./applications/transfer/v1/tx";
import * as _196 from "./applications/transfer/v2/packet";
import * as _197 from "./core/channel/v1/channel";
import * as _198 from "./core/channel/v1/genesis";
import * as _199 from "./core/channel/v1/query";
import * as _200 from "./core/channel/v1/tx";
import * as _201 from "./core/client/v1/client";
import * as _202 from "./core/client/v1/genesis";
import * as _203 from "./core/client/v1/query";
import * as _204 from "./core/client/v1/tx";
import * as _205 from "./core/commitment/v1/commitment";
import * as _206 from "./core/connection/v1/connection";
import * as _207 from "./core/connection/v1/genesis";
import * as _208 from "./core/connection/v1/query";
import * as _209 from "./core/connection/v1/tx";
import * as _210 from "./core/port/v1/query";
import * as _211 from "./core/types/v1/genesis";
import * as _212 from "./lightclients/localhost/v1/localhost";
import * as _213 from "./lightclients/solomachine/v1/solomachine";
import * as _214 from "./lightclients/solomachine/v2/solomachine";
import * as _215 from "./lightclients/tendermint/v1/tendermint";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._192, ..._193, ..._194, ..._195 };
      export const v2 = { ..._196 };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._197, ..._198, ..._199, ..._200 };
    }
    export namespace client {
      export const v1 = { ..._201, ..._202, ..._203, ..._204 };
    }
    export namespace commitment {
      export const v1 = { ..._205 };
    }
    export namespace connection {
      export const v1 = { ..._206, ..._207, ..._208, ..._209 };
    }
    export namespace port {
      export const v1 = { ..._210 };
    }
    export namespace types {
      export const v1 = { ..._211 };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._212 };
    }
    export namespace solomachine {
      export const v1 = { ..._213 };
      export const v2 = { ..._214 };
    }
    export namespace tendermint {
      export const v1 = { ..._215 };
    }
  }
}
