# MCP 详细使用指南

export const metadata = {
  title: 'MCP 详细使用指南',
  description: '如何设置和使用MCP，包括环境准备、安装配置和具体使用方法'
};

本指南将详细介绍如何设置和使用MCP (Model Context Protocol)，包括环境准备、安装配置、以及具体的使用方法。

## 1. 环境准备

在开始使用MCP之前，需要确保您的系统满足以下基本要求：

### 1.1 系统需求

- **操作系统**：
  - macOS
  - Windows
  - Linux (部分功能可能受限)

- **硬件要求**：
  - 至少4GB内存
  - 至少10GB可用磁盘空间

### 1.2 必要的软件环境

以下是使用MCP必须安装的软件：

1. **Node.js**：v18或更高版本
   ```bash
   # 检查Node.js版本
   node --version
   
   # 如果未安装，从https://nodejs.org/下载并安装
   ```

2. **Python**：v3.8或更高版本
   ```bash
   # 检查Python版本
   python --version
   
   # 如果未安装，从https://python.org/下载并安装
   ```

3. **UV包管理器**：Python包管理工具，用于安装MCP服务器
   ```bash
   # 安装UV
   pip install uv
   
   # 验证安装
   uv --version
   ```

### 1.3 其他可选软件

根据您打算使用的MCP服务器类型，可能需要安装其他软件：

- **Git**：用于克隆和管理代码仓库
- **Docker**：用于运行容器化的MCP服务器
- **数据库软件**：如SQLite、PostgreSQL等，视使用的服务器类型而定

## 2. Claude桌面应用安装与配置

Claude桌面应用是一个常用的MCP主机和客户端，能够方便地与MCP服务器交互。

### 2.1 安装Claude桌面应用

1. 访问[Claude官方网站](https://claude.ai/download)下载最新版本的Claude桌面应用
   - 根据操作系统选择相应的安装包
   - 确保下载最新版本以获得完整的MCP支持

2. 按照安装向导完成安装过程

3. 首次启动Claude并完成登录

### 2.2 配置Claude桌面应用的MCP设置

Claude桌面应用需要通过配置文件来连接MCP服务器。根据操作系统，配置文件位置有所不同：

#### macOS系统：

1. 打开终端应用
2. 确保Claude桌面应用配置目录存在
   ```bash
   mkdir -p ~/Library/Application\ Support/Claude
   ```
3. 创建或编辑配置文件
   ```bash
   open -a TextEdit ~/Library/Application\ Support/Claude/claude_desktop_config.json
   ```

#### Windows系统：

1. 打开文件资源管理器
2. 导航至配置目录：`C:\Users\用户名\AppData\Roaming\Claude`
3. 若目录不存在，手动创建
4. 使用记事本或其他文本编辑器创建/编辑`claude_desktop_config.json`文件

#### 基本配置格式：

在配置文件中添加以下基本结构：

```json
{
  "mcpServers": {
    // 在这里添加MCP服务器配置
  }
}
```

export function ConfigExample() {
  return (
    <div className="config-example">
      <h4>配置文件示例</h4>
      <pre>
      {`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"],
      "resources": {
        "paths": ["/Users/username/Documents"]
      }
    }
  }
}`}
      </pre>
    </div>
  );
}

<ConfigExample />

## 3. 安装您的第一个MCP服务器

我们将从安装MCP安装器开始，这是一个特殊的MCP服务器，可以帮助安装其他MCP服务器。

### 3.1 安装MCP安装器

#### 对于Windows：

1. 在配置文件中添加以下内容：
   ```json
   {
     "mcpServers": {
       "mcp-installer": {
         "command": "cmd.exe",
         "args": ["/c", "npx", "-y", "@anaisbetts/mcp-installer"]
       }
     }
   }
   ```

#### 对于macOS和Linux：

1. 在配置文件中添加以下内容：
   ```json
   {
     "mcpServers": {
       "mcp-installer": {
         "command": "npx",
         "args": ["-y", "@anaisbetts/mcp-installer"]
       }
     }
   }
   ```

2. 保存配置文件并重启Claude桌面应用

3. 验证安装：
   - 打开Claude桌面应用
   - 在对话框右侧应该能看到一个工具图标（类似锤子形状）
   - 点击该图标，应该能看到MCP安装器提供的工具列表

### 3.2 安装文件系统MCP服务器

文件系统MCP服务器是最常用的服务器之一，允许AI助手访问和操作您本地文件系统中的文件。

1. 在Claude桌面应用中，输入以下请求：
   ```
   请帮我安装文件系统MCP服务器（@modelcontextprotocol/server-filesystem）
   ```

2. Claude会使用MCP安装器自动安装文件系统服务器，并提示您进行必要的配置

3. 若需手动配置，可在配置文件中添加：
   ```json
   {
     "mcpServers": {
       "mcp-installer": {
         "command": "npx",
         "args": ["-y", "@anaisbetts/mcp-installer"]
       },
       "filesystem": {
         "command": "npx",
         "args": ["-y", "@modelcontextprotocol/server-filesystem"],
         "resources": {
           "paths": ["您希望AI能访问的路径，如/Users/username/Documents"]
         }
       }
     }
   }
   ```

4. 保存配置并重启Claude

### 3.3 安装Brave搜索MCP服务器

Brave搜索MCP服务器允许Claude进行网络搜索，获取最新信息。

1. 首先，您需要获取Brave API密钥：
   - 访问[Brave API](https://brave.com/search/api/)
   - 注册并选择免费套餐（每月最多2,000次查询）
   - 生成并复制您的API密钥

2. 在Claude中请求安装：
   ```
   请帮我安装Brave搜索MCP服务器
   ```

3. 或者直接在配置文件中添加：
   ```json
   {
     "mcpServers": {
       "brave-search": {
         "command": "npx",
         "args": ["-y", "@modelcontextprotocol/server-brave-search"],
         "env": {
           "BRAVE_API_KEY": "您的Brave API密钥"
         }
       }
     }
   }
   ```

4. 保存配置并重启Claude

## 4. 使用MCP服务器

一旦配置好MCP服务器，您就可以开始通过Claude桌面应用与它们交互。

### 4.1 使用文件系统服务器

#### 列出目录内容：

```
请列出我Documents目录中的所有文件
```

#### 读取文件内容：

```
请阅读并总结/Users/username/Documents/report.txt文件的内容
```

#### 创建新文件：

```
请在我的Documents目录下创建一个新的文本文件，名为notes.txt，内容为"这是我的笔记"
```

#### 修改现有文件：

```
请在/Users/username/Documents/notes.txt文件末尾添加一行"新增内容：今天学习了MCP的使用"
```

### 4.2 使用Brave搜索服务器

#### 进行基本搜索：

```
使用Brave搜索引擎查找有关"气候变化最新研究"的信息
```

#### 获取特定信息：

```
请搜索并告诉我今天的比特币价格
```

#### 查找最新新闻：

```
请搜索并总结关于SpaceX最新的新闻动态
```

### 4.3 使用SQLite服务器

如果已安装SQLite MCP服务器，可执行以下操作：

#### 查询数据库：

```
请查询mydb.sqlite数据库中users表的所有记录
```

#### 执行SQL查询：

```
请在mydb.sqlite数据库中执行以下SQL查询：SELECT * FROM products WHERE price < 100
```

#### 分析数据：

```
请分析mydb.sqlite数据库中sales表的数据，找出销售额最高的月份
```

## 5. 高级MCP使用技巧

### 5.1 同时使用多个MCP服务器

MCP的一个强大功能是能够同时连接多个服务器，让AI助手协同使用不同的工具：

```
请从我的数据库中找出所有去年的销售记录，然后创建一个报告文件保存在我的Documents目录下，同时搜索最新的市场趋势并将这些信息也加入报告中
```

上述请求会同时使用SQLite服务器、文件系统服务器和Brave搜索服务器。

### 5.2 使用环境变量保护敏感信息

当配置需要API密钥的MCP服务器时，建议使用环境变量来保护敏感信息：

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "从环境变量读取而不是硬编码"
      }
    }
  }
}
```

### 5.3 限制MCP服务器访问权限

为了安全起见，始终遵循最小权限原则，只允许MCP服务器访问必要的资源：

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"],
      "resources": {
        "paths": ["/Users/username/Projects/public-data"],
        "readOnly": true
      }
    }
  }
}
```

上述配置限制文件系统服务器只能读取指定目录，无法修改文件。

export function SecurityTips() {
  return (
    <div className="security-alert">
      <h4>安全提示</h4>
      <ul>
        <li>限制MCP服务器访问范围到必要的目录</li>
        <li>对敏感数据使用只读权限</li>
        <li>使用环境变量存储API密钥而非硬编码</li>
        <li>定期检查服务器访问日志确保安全</li>
      </ul>
    </div>
  );
}

<SecurityTips />

## 6. 构建自定义MCP服务器

如果现有的MCP服务器不能满足您的需求，您可以构建自己的自定义服务器。

### 6.1 准备工作

1. 确保已安装必要的开发工具：
   - Node.js和npm
   - Python和uv
   - Git

2. 选择适合的编程语言：
   - TypeScript/JavaScript
   - Python
   - 其他支持的语言

### 6.2 使用Python创建MCP服务器

#### 创建项目

1. 创建新项目目录：
   ```bash
   mkdir my_mcp_server
   cd my_mcp_server
   ```

2. 使用MCP提供的工程创建器创建模板项目：
   ```bash
   uv pip install create-mcp-server
   create-mcp-server my_service
   cd my_service
   ```

#### 修改服务器代码

编辑`src/my_service/server.py`文件，实现所需功能：

```python
from modelcontextprotocol.server import Server, StdioServerTransport
from modelcontextprotocol.server.tools import tool, ToolRegistry
import asyncio

# 创建服务器实例
server = Server(
    {
        "name": "my-custom-server",
        "version": "1.0.0"
    },
    {
        "capabilities": {
            "resources": {},
            "tools": {}
        }
    }
)

# 注册工具
tools = ToolRegistry()

@tools.tool({
    "name": "greet",
    "description": "Greets a person by name",
    "parameters": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "The name of the person to greet"
            }
        },
        "required": ["name"]
    },
    "returns": {
        "type": "string",
        "description": "A greeting message"
    }
})
async def greet(params):
    name = params["name"]
    return f"Hello, {name}! Nice to meet you."

# 注册工具到服务器
server.register_tools(tools)

# 主函数
async def main():
    # 创建传输
    transport = StdioServerTransport()
    
    # 连接服务器到传输
    await server.connect(transport)
    
    # 保持服务器运行
    await server.wait_for_disconnect()

if __name__ == "__main__":
    asyncio.run(main())
```

#### 运行服务器

```bash
python -m my_service
```

### 6.3 使用TypeScript创建MCP服务器

#### 创建项目

1. 初始化项目：
   ```bash
   mkdir my-ts-mcp-server
   cd my-ts-mcp-server
   npm init -y
   ```

2. 安装依赖：
   ```bash
   npm install @modelcontextprotocol/sdk typescript ts-node
   ```

3. 创建TypeScript配置：
   ```bash
   npx tsc --init
   ```

#### 编写服务器代码

创建`src/index.ts`文件：

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// 定义参数和返回值的Schema
const GreetParamsSchema = z.object({
  name: z.string().describe("The name of the person to greet")
});

const GreetReturnsSchema = z.string().describe("A greeting message");

// 创建服务器
const server = new Server(
  {
    name: "my-typescript-server",
    version: "1.0.0"
  },
  {
    capabilities: {
      tools: {
        greet: {
          description: "Greets a person by name",
          parameters: GreetParamsSchema,
          returns: GreetReturnsSchema
        }
      }
    }
  }
);

// 实现工具处理函数
server.setToolHandler("greet", async (params) => {
  const { name } = GreetParamsSchema.parse(params);
  return `Hello, ${name}! Nice to meet you from TypeScript.`;
});

// 启动服务器
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  
  // 等待断开连接
  await new Promise(() => {}); // 保持运行
}

main().catch(console.error);
```

#### 构建和运行

1. 添加脚本到`package.json`：
   ```json
   {
     "scripts": {
       "start": "ts-node src/index.ts"
     }
   }
   ```

2. 运行服务器：
   ```bash
   npm start
   ```

### 6.4 配置自定义服务器

在Claude配置文件中添加您的自定义服务器：

```json
{
  "mcpServers": {
    "my-custom-server": {
      "command": "python",
      "args": ["-m", "my_service"],
      "cwd": "/path/to/my_mcp_server/my_service"
    }
  }
}
```

## 7. 常见问题与故障排除

### 7.1 MCP服务器不显示在Claude中

**问题**：配置了MCP服务器，但在Claude应用中没有显示。

**解决方案**：
1. 确认配置文件路径和格式正确
2. 验证配置的命令是否可在终端/命令提示符中执行
3. 检查服务器日志：
   ```bash
   # macOS
   tail -n 20 -f ~/Library/Logs/Claude/mcp*.log
   ```
4. 确保重启了Claude应用

### 7.2 安装依赖失败

**问题**：安装MCP服务器时依赖安装失败。

**解决方案**：
1. 确保网络连接正常
2. 尝试使用管理员/sudo权限运行
3. 更新npm和pip：
   ```bash
   npm install -g npm
   pip install --upgrade pip
   ```
4. 清除缓存：
   ```bash
   npm cache clean --force
   ```

### 7.3 文件系统权限问题

**问题**：Claude无法访问特定目录或文件。

**解决方案**：
1. 确认配置的路径是否正确
2. 检查目录和文件的权限
3. 确保路径使用绝对路径而非相对路径
4. 在macOS上，可能需要授予"完全磁盘访问权限"

### 7.4 使用asdf版本管理器的问题

**问题**：使用asdf版本管理器时，遇到"unknown command: npx"错误。

**解决方案**：
1. 确保Node.js插件已安装：
   ```bash
   asdf plugin add nodejs
   ```
2. 安装最新版本：
   ```bash
   asdf install nodejs latest
   asdf global nodejs latest
   ```
3. 重新安装npm：
   ```bash
   npm install -g npm
   ```

export function TroubleshootingTool() {
  return (
    <div className="troubleshooting-tool">
      <h4>故障诊断工具</h4>
      <p>遇到问题？请尝试以下步骤自动排查：</p>
      <ol>
        <li>验证配置文件语法：<code>cat 配置文件路径 | jq</code></li>
        <li>检查服务器状态：<code>ps aux | grep mcp</code></li>
        <li>检查日志文件</li>
        <li>重启Claude应用</li>
      </ol>
      <p>如果问题仍然存在，请访问<a href="https://github.com/modelcontextprotocol/servers/issues">MCP GitHub Issues</a>寻求帮助。</p>
    </div>
  );
}

<TroubleshootingTool />

## 8. MCP使用最佳实践

### 8.1 安全性最佳实践

1. **最小权限原则**：只允许MCP服务器访问必要的资源
2. **使用环境变量**：不要在配置文件中硬编码API密钥和密码
3. **定期审查权限**：定期检查和更新MCP服务器的访问权限
4. **使用只读模式**：尽可能使用只读模式，除非确实需要写入权限

### 8.2 性能最佳实践

1. **限制服务器数量**：只启用当前任务需要的MCP服务器
2. **控制资源访问范围**：限制文件系统服务器只访问特定目录，而不是整个文件系统
3. **使用资源缓存**：对于频繁访问的资源，考虑使用缓存机制
4. **优化查询参数**：使用精确的查询参数减少冗余数据传输

### 8.3 用户体验最佳实践

1. **清晰的提示**：向Claude提供清晰、具体的指令
2. **操作批量化**：尽量将相关操作组合在一起，减少交互次数
3. **验证操作**：在执行重要操作前，要求Claude确认
4. **提供反馈**：根据Claude的操作结果提供反馈，帮助改进后续交互

## 9. 总结

MCP为AI助手提供了与外部系统和数据交互的能力，极大地扩展了其功能范围。通过本指南，您已经了解了如何设置MCP环境、安装和配置MCP服务器，以及如何有效地使用这些服务器与Claude进行交互。您还学习了如何创建自定义MCP服务器，以满足特定需求。

随着MCP生态系统的不断发展，越来越多的服务器和功能将会可用，进一步增强AI助手的能力。通过遵循最佳实践，您可以安全、高效地利用MCP，使AI助手成为您工作和生活中更有价值的工具。

export function RelatedLinks() {
  return (
    <div className="related-links">
      <h4>延伸阅读</h4>
      <ul>
        <li><a href="1-MCP介绍.mdx">MCP介绍</a></li>
        <li><a href="3-MCP服务器生态系统.mdx">MCP服务器生态系统</a></li>
        <li><a href="https://modelcontextprotocol.io/tutorials">MCP官方教程</a></li>
      </ul>
    </div>
  );
}

<RelatedLinks />

## 参考资源

- [MCP官方文档](https://modelcontextprotocol.io/)
- [Claude桌面应用文档](https://claude.ai/docs)
- [MCP服务器GitHub仓库](https://github.com/modelcontextprotocol/servers)
- [MCP服务器开发指南](https://modelcontextprotocol.io/tutorials/building-mcp-with-llms) 