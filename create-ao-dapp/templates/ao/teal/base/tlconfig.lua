return {
    source_dir = "src",
    include_dir = { "src/typedefs", "src/", "packages/" },
    include = {
        "**/**.tl",
    },
    build_dir = "build-lua",
    global_env_def = "ao",
    module_name = "process",
    gen_target = "5.3",
    disable_warnings = { "unused" }
}
