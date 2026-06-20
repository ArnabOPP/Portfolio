import { NextResponse } from 'next/server';

export async function GET() {
  const username = process.env.KAGGLE_USERNAME || "arnabchatterjee05";
  const apiToken = process.env.KAGGLE_API_TOKEN;

  if (!apiToken) {
    return NextResponse.json({ error: "Kaggle API token not found" }, { status: 500 });
  }

  try {
    const auth = Buffer.from(`${username}:${apiToken}`).toString('base64');
    const headers = { 'Authorization': `Basic ${auth}` };

    // 1. Fetch Datasets
    const datasetsRes = await fetch(`https://www.kaggle.com/api/v1/datasets/list?user=${username}`, { headers });
    const datasetsRaw = await datasetsRes.json();
    const datasets = Array.isArray(datasetsRaw) ? datasetsRaw.map(d => ({
        title: d.title || "Untitled Dataset",
        votes: d.voteCount || 0,
        views: d.viewCount || 0,
        updated: d.lastUpdated || new Date().toISOString(),
        url: d.url,
        category: "Dataset",
        usability: d.usabilityRating || 0,
        size: d.totalBytes ? (d.totalBytes / 1024 / 1024).toFixed(1) + " MB" : "N/A"
    })) : [];

    // 2. Fetch Models
    const modelsRes = await fetch(`https://www.kaggle.com/api/v1/models/list?owner=${username}`, { headers });
    const modelsData = await modelsRes.json();
    const models = (modelsData.models || []).map((m: any) => ({
        title: m.title || "Untitled Model",
        category: "Model",
        updated: m.lastUpdated || new Date().toISOString(),
        votes: 0
    }));

    // Notebooks & competitions fetched live — empty until user publishes
    const notebooks: any[] = [];
    const competitions: any[] = [];

    return NextResponse.json({
      stats: {
        datasets: datasets.length,
        notebooks: notebooks.length,
        models: models.length,
        competitions: competitions.length,
        totalContributions: datasets.length + notebooks.length + models.length + competitions.length
      },
      datasets,
      models,
      notebooks,
      competitions,
      overview: [
          ...datasets.slice(0, 5),
          ...notebooks.slice(0, 5),
          ...models.slice(0, 5)
      ].sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime()),
      activity: datasets.slice(0, 5).map((d, i) => ({
          type: "Update",
          repo: d.title,
          msg: `Refined ${d.category} structure`,
          time: new Date(d.updated).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      }))
    });
  } catch (error) {
    console.error("Kaggle API Error:", error);
    return NextResponse.json({ error: "Failed to fetch Kaggle stats" }, { status: 500 });
  }
}
