# 时尚视频内容裂变 SKILL

从合格视频母版生成同品牌、同产品、同市场，但钩子、动作链、镜头组合和使用情境不同的时尚带货内容。

- 中文教程：`index.html`
- English guide：`en.html`
- 安装包：`skill/fashion-video-content-variation.zip`
- 图片教程：`assets/tutorial/`
- 真实分镜案例：`assets/storyboards/`

## 一键安装

```powershell
$zip=Join-Path $env:TEMP 'fashion-video-content-variation.zip'; Invoke-WebRequest -Uri 'https://github.com/pusatpakaiankime-bit/fashion-video-content-variation-guide/raw/refs/heads/main/skill/fashion-video-content-variation.zip' -OutFile $zip; $dest=Join-Path $env:USERPROFILE '.codex\skills'; New-Item -ItemType Directory -Force -Path $dest | Out-Null; Expand-Archive -LiteralPath $zip -DestinationPath $dest -Force; Remove-Item -LiteralPath $zip; Write-Host '安装完成，请重新打开 Codex。'
```

## 12张详细图片教程

从下载、手动安装、一键安装、验证排错，到母版DNA、产品事实、裂变矩阵、视频类型、时间轴、16格质检和批量平台提示词，均位于 `assets/tutorial/x01` 至 `x12`。
