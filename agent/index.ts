import { fpcore } from "../core/FPCore";
import { log } from "../utils/logger";

function trace_jni_for_wework() {
  var target_so = Module.getBaseAddress("libwechatnormsg_stl.so");
  Interceptor.attach(target_so.add(0x8c1b4), {
    onEnter: function (args) {
      log(" ================ attach func aa");
      fpcore.jni.trace();
    },
  });
}
setImmediate(trace_jni_for_wework);
