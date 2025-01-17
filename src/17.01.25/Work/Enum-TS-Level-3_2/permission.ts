console.warn("Enum-TS-Level-3_2");
// * Enum-TS-Level-3_2
enum Permission {
  None = 0,
  Read = 1,
  Write = 2,
  Execute = 4,
}

console.log(Object.values(Permission)); // keys first
console.log(Object.keys(Permission)); // values als string first

function logPermissionStatus(status: Permission) {
  if (status === Permission.None) {
    console.log("You dont have any permission.");
  } else if (status >= Permission.Read) {
    console.log("You have persmission to Read");
  } else if (status >= Permission.Write) {
    console.log("You have permission to Read and Write");
  } else if (status >= Permission.Execute) {
    console.log("You have the permission to Read, Write and Execute");
  }
}
