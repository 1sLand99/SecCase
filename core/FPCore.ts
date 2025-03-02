import { Jni } from "../modules/jnitrace/Jni";
class FPCore {
  private _jniModule = new Jni();
  public get jni() {
    return this._jniModule;
  }
}

export const fpcore = new FPCore();
