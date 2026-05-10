// types/global.d.ts

declare namespace React {
  interface ButtonHTMLAttributes<T> {
    commandfor?: string; // buttonに commandfor を追加
    command?: string; // buttonに command を追加
  }
  interface DialogHTMLAttributes<T> {
    closedby?: "any" | "closerequest" | "none"; // dialogに closedby を追加
  }
}
