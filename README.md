# MoveMap London

A personal map-based web app to explore London areas for renting and relocation.

This tool helps me compare different areas in London by combining location, council tax, nearby tube access, and direct Rightmove search links — all in one interactive map.

---

## 🧭 Purpose

I built this project primarily for my own use when deciding where to move next in London.

Instead of constantly switching between Google Maps, Rightmove, and random tabs, I wanted a single interface where I can:

- Quickly explore areas on a map
- Jump straight into filtered Rightmove searches
- Understand council tax differences
- See nearby tube stations and lines
- Check how convenient a location is by clicking directly on the map

---

## ✨ Features

### 🗺 Interactive Map
- Displays selected London areas as clickable markers
- Google Maps-style layout (map + side panel)
- Smooth zoom and navigation

### 🏙 Area Overview
- Area name and borough
- Council tax (Band B, C, D, E)
- Direct Rightmove link (pre-filtered)
- Associated nearby tube stations
- Tube lines available in the area

### 📍 Map Click Inspection
- Click anywhere on the map
- Finds the **nearest 3 tube stations**
- Shows:
  - Station name
  - Distance (in miles)
  - Available lines

### 🔎 Quick Navigation
- Jump to any predefined area instantly

---

## 🧱 Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Map:** Leaflet
- **Data:** Static JSON / local data files
- **Deployment:** Vercel

---

## 📊 Data Structure

All key data is stored locally for simplicity and speed:

- `areas.ts`
  - area name, borough, coordinates
  - Rightmove URL (manually provided)
  - associated station IDs

- `stations.ts`
  - station name, coordinates
  - tube lines

- `councilTax.ts`
  - borough-level council tax (Band B–E)

---

## 🔗 Rightmove Integration

Each area includes a **pre-filtered Rightmove URL**.

These URLs are:
- Manually curated
- Stored in the data file (`areas.ts`)
- Easily replaceable

To update: src/data/areas.ts
Replace:
```ts
rightmoveUrl: "https://example.com"
with your actual Rightmove search link.
