local utils = require ".utils"

local function newmodule(selfId)
  local ao = {}
  ao.id = selfId

  local _my = {}

  --[[
    if message is for the process we're testing, handle according to globally defined handlers
    otherwise, use simplified mock handling with dedicated module representing the target process

    @param rawMsg table with key-value pairs representing
    {
      Target = string, -- process id
      From = string, -- process id or wallet id; if not provided, defaults to self
      Data = string, -- message data
      Tags = table, -- key-value pairs representing message tags
      TagName1 = TagValue1, -- tag key-value pair of strings
      TagName2 = TagValue2, -- tag key-value pair of strings
    }
  ]]
  function ao.send(rawMsg)
    if _G.IsInUnitTest then return end

    local msg = _my.formatMsg(rawMsg)

    if msg.Target == _G.Owner then
      printVerb(2)('⚠️ Skip handle: Message from ' .. msg.From .. ' to agent owner: ' .. tostring(msg.Action))
      -- ALTERNATIVELY: _G.LastMessageToOwner = msg
      return
    end

    if msg.Target == _G.MainProcessId then
      _G.Handlers.evaluate(msg, _my.env)
    else
      local targetProcess = _G.Processes[msg.Target]
      if targetProcess then
        targetProcess.handle(msg)
      else
        error('!!! No handler found for target process: ' .. msg.Target)
      end
    end
  end

  -- INTERNAL

  _my.env = {
    Process = {
      Id = '9876',
      Tags = {
        {
          name = 'Data-Protocol',
          value = 'ao'
        },
        {
          name = 'Variant',
          value = 'ao.TN.1'
        },
        {
          name = 'Type',
          value = 'Process'
        }
      }
    },
    Module = {
      Id = '4567',
      Tags = {
        {
          name = 'Data-Protocol',
          value = 'ao'
        },
        {
          name = 'Variant',
          value = 'ao.TN.1'
        },
        {
          name = 'Type',
          value = 'Module'
        }
      }
    }
  }

  _my.createMsg = function()
    return {
      Id = '1234',
      Target = 'AOS',
      Owner = "fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY",
      From = 'OWNER',
      Data = '1984',
      Tags = {},
      ['Block-Height'] = '1',
      Timestamp = _G.VirtualTime or os.time(),
      Module = '4567'
    }
  end

  _my.formatMsg = function(msg)
    local formattedMsg = _my.createMsg()
    -- allow these top-level keys to be overwritten
    formattedMsg.From = msg.From or ao.id
    formattedMsg.Data = msg.Data or nil
    formattedMsg.Timestamp = msg.Timestamp or formattedMsg.Timestamp

    -- handle tags
    formattedMsg.Tags = msg.Tags or formattedMsg.Tags
    for k, v in pairs(msg) do
      if not formattedMsg[k] then
        formattedMsg.Tags[k] = v
      end

      formattedMsg[k] =
          v -- TODO check for safety here in order to be complete (no top level keys like Module, Owner, From-Process, etc. should be overwritten)
    end

    return formattedMsg
  end

  return ao
end

return newmodule