async function  push (pathname, options) {
  console.log(`pathname:${pathname},recursive:${options.recursive}`)
}

module.exports = (...argvs) => {
  push(...argvs).catch(err=>{
    error(err);
    process.exit;
  })
}