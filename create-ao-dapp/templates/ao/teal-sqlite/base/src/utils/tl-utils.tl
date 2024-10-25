local type Predicate = function<T>(value: T): boolean
    local type Reducer = function<T>(accumulator: T, value: T, index: number, arr: {T}): T
    local type Mapper = function<T, U>(value: T, index: number, arr: {T}): U
    
    
    
    local function find<T>(predicate: Predicate<T>, arr: {T}): T | nil
        for _, value in ipairs(arr) do
          if predicate(value) then
            return value
          end
        end
        return nil
    end
    
    local function filter<T>(predicate: Predicate<T>, arr: {T}): {T}
        local result: {T} = {}
        for _, value in ipairs(arr) do
            if predicate(value) then
                table.insert(result, value)
            end
        end
        return result
    end
    
    local function reduce<T>(reducer: Reducer<T>, initialValue: T, arr: {T}): T
      local result = initialValue
      for i, value in ipairs(arr) do
          result = reducer(result, value, i, arr)
      end
      return result
    end
    
    
    local function map<T, U>(mapper: Mapper<T, U>, arr: {T}): {U}
      local result: {U} = {}
      for i, value in ipairs(arr) do
          result[i] = mapper(value, i, arr)
      end
      return result
    end
    
    local function reverse<T>(arr: {T}): {T}
      local result: {T} = {}
      for i = #arr, 1, -1 do
          table.insert(result, arr[i])
      end
      return result
    end
    
    local function compose<T>(...: function(T): T): function(T): T
      local funcs = {...}
      return function(x: T): T
          for i = #funcs, 1, -1 do
              x = funcs[i](x)
          end
          return x
      end
    end
    
    local function keys<K,V>(xs: {K:V}):{K}
      local ks = {}
      for k, _ in pairs(xs) do
         table.insert(ks, k)
      end
      return ks
    end
    
    local function values<K,V>(xs: {K:V}):{V}
      local vs = {}
      for _, v in pairs(xs) do
         table.insert(vs, v)
      end
      return vs
    end
    
    local function includes<T>(value: T, arr: {T}): boolean
      for _, v in ipairs(arr) do
          if v == value then
              return true
          end
      end
      return false
    end
    
    return {
      find = find,
      filter = filter,
      reduce = reduce,
      map = map,
      reverse = reverse,
      compose = compose,
      values = values,
      keys = keys,
      includes = includes
    }