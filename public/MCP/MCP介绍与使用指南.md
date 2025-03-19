# MCP 概述指南

## MCP是什么

MCP (Model Context Protocol) 是AI领域的"USB-C接口"，由Anthropic开发的统一工具调用协议，让AI模型能无缝连接外部工具和数据源。

简单理解：MCP让AI像人类一样能够使用各类工具，而不必为每个工具开发专门的集成方式。

> 🔍 详细内容：[MCP详细介绍](1-MCP介绍.md)

## 核心要点

- **解决痛点**：统一了以前各种不同的工具调用标准
- **智能体公式**：智能体 = 大语言模型 + 工具，MCP标准化了工具连接部分
- **降低门槛**：开发者从几千行代码减少到几百行就能创建AI工具
- **支持应用**：Claude Desktop、Cursor、VSCode Cline、Windsurf等

## 主要生态组成

### 支持平台
- Claude桌面应用
- Cursor IDE
- VSCode (通过Cline)
- 微软AutoGen、HuggingFace的Smolagents等框架

### 服务器市场
超过1000个MCP服务器分布在多个平台：
- [PulseMCP](https://www.pulsemcp.com/servers)
- [Cline Marketplace](https://cline.bot/mcp-marketplace) 
- [mcp.so](https://mcp.so/)

> 📚 完整列表：[MCP服务器生态系统](3-MCP服务器生态系统.md)

## 快速入门三步走

1. **安装支持MCP的应用**（如Claude Desktop）
   > 详细步骤：[Claude配置指南](2-MCP使用指南.md#2-claude桌面应用安装与配置)

2. **安装MCP安装器**（通过配置文件添加）
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

3. **安装需要的服务器**
   ```
   请帮我安装文件系统MCP服务器
   ```
   
> 🚀 详细配置：[MCP服务器安装详解](2-MCP使用指南.md#3-安装您的第一个mcp服务器)

## 常见服务器种类

### 官方核心服务器
- 文件系统服务器(Filesystem)
- 网页获取(Fetch)
- 数据库访问(SQLite/PostgreSQL)
- 网络搜索(Brave Search)
- 代码仓库管理(GitHub/Git)

### 社区热门服务器
- 知识管理(Obsidian/Notion)
- AI增强工具(OpenAI/WolframAlpha)
- 开发辅助(Python REPL/Code Context)
- 数据分析(MongoDB/Vector DB)

## 基本使用方式

使用MCP的关键在于用自然语言描述任务，AI会自动选择合适的工具完成：

```
请搜索最新人工智能趋势并创建一个报告文件
```

这个简单的请求会自动使用搜索服务器和文件系统服务器，无需指定技术细节。

> 📝 使用示例：[MCP使用指南](2-MCP使用指南.md#4-使用mcp服务器)

## 开发自己的MCP服务器

有三种创建方式：
1. **Python**：使用官方SDK，简洁易用
2. **TypeScript/JavaScript**：适合web开发者
3. **其他语言**：通过实现MCP协议规范

> 🔨 开发指南：[构建自定义MCP服务器](2-MCP使用指南.md#6-构建自定义mcp服务器)

## 未来展望

MCP正快速发展，预计将成为AI调用外部工具的行业标准，未来发展方向：
- 企业级认证和安全机制
- 专业领域服务器扩展
- 云端和本地AI模型集成
- 多服务器协同工作的复杂工作流

> 详细展望：[MCP的未来发展](1-MCP介绍.md#7-mcp的发展与前景)

## 常见问题

- **配置问题**：配置文件格式错误、路径不正确
- **权限问题**：服务器无法访问资源、API密钥缺失
- **性能问题**：服务器数量过多、资源访问范围过大

> �� 问题解决：[常见问题与故障排除](2-MCP使用指南.md#7-常见问题与故障排除)

## 推荐资源

- [MCP官方网站](https://modelcontextprotocol.io/)
- [MCP服务器开发文档](https://modelcontextprotocol.io/tutorials/building-mcp-with-llms)
- [PulseMCP服务器目录](https://www.pulsemcp.com/servers)
- [Cline MCP教程](https://cline.bot/blog/the-developers-guide-to-mcp) 