#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate projects.json from the projects directory structure
 * Run this script whenever you add/modify projects: node generate-projects.js
 */

class ProjectGenerator {
    constructor() {
        this.projectsDir = './projects';
        this.outputFile = './projects.json';

        // Category mapping
        this.categoryMap = {
            '0': 'AI & Machine Learning',
            '1': 'Game Development',
            '2': 'Frontend & Backend'
        };
    }

    async generateProjectsJson() {
        try {
            console.log('🔍 Scanning projects directory...');

            if (!fs.existsSync(this.projectsDir)) {
                console.error(`❌ Projects directory not found: ${this.projectsDir}`);
                console.log('📁 Please create a "projects" folder in your root directory');
                return;
            }

            const projects = await this.scanProjects();

            if (projects.length === 0) {
                console.log('⚠️  No projects found in the projects directory');
                console.log('📝 Make sure your project folders are named like: "12-BangBang (0-29.1.2005)"');
                return;
            }

            // Write projects.json
            fs.writeFileSync(this.outputFile, JSON.stringify(projects, null, 2));

            console.log(`✅ Generated ${this.outputFile} with ${projects.length} projects:`);
            projects.forEach(project => {
                console.log(`   📂 ${project.folder} - ${project.title} (${project.category}, ${project.date}) - ${project.files.length} files`);
            });

        } catch (error) {
            console.error('❌ Error generating projects.json:', error);
        }
    }

    async scanProjects() {
        const projects = [];
        const entries = fs.readdirSync(this.projectsDir, { withFileTypes: true });

        // Filter and sort project directories
        const projectDirs = entries
            .filter(entry => entry.isDirectory())
            .filter(entry => /^\d+/.test(entry.name)) // Must start with a number
            .sort((a, b) => {
                const aNum = parseInt(a.name.match(/^\d+/)[0]);
                const bNum = parseInt(b.name.match(/^\d+/)[0]);
                return aNum - bNum;
            });

        for (const dir of projectDirs) {
            const projectData = await this.scanProjectDirectory(dir.name);
            if (projectData) {
                projects.push(projectData);
            }
        }

        return projects;
    }

    async scanProjectDirectory(folderName) {
        const projectPath = path.join(this.projectsDir, folderName);
        const files = [];

        try {
            const entries = fs.readdirSync(projectPath);

            // Find all indexed files (0.png, 1.txt, 2.jpg, etc.)
            const indexedFiles = entries
                .filter(file => /^\d+\.(png|jpg|jpeg|gif|webp|txt|md)$/i.test(file))
                .sort((a, b) => {
                    const aIndex = parseInt(a.split('.')[0]);
                    const bIndex = parseInt(b.split('.')[0]);
                    return aIndex - bIndex;
                });

            for (const fileName of indexedFiles) {
                const filePath = path.join(projectPath, fileName);
                const ext = path.extname(fileName).toLowerCase();
                const isImage = ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext);

                const fileData = {
                    name: fileName,
                    type: isImage ? 'image' : 'text'
                };

                // Read text file content
                if (!isImage) {
                    try {
                        fileData.content = fs.readFileSync(filePath, 'utf8').trim();
                    } catch (e) {
                        fileData.content = `Content from ${fileName}`;
                    }
                }

                files.push(fileData);
            }

            if (files.length === 0) {
                console.log(`⚠️  No indexed files found in ${folderName} (looking for 0.png, 1.txt, etc.)`);
                return null;
            }

            // Parse folder name format: 12-BangBang (0-29/1/2005)
            const match = folderName.match(/^(\d+)-(.+?)\s*\((\d+)-(.+)\)$/);

            let projectData;
            if (match) {
                const [, index, name, categoryIndex, date] = match;
                projectData = {
                    id: parseInt(index),
                    index: parseInt(index),
                    title: name,
                    category: this.categoryMap[categoryIndex] || 'Unknown',
                    date: date,
                    folder: folderName,
                    files: files
                };

                console.log(`   ✅ Parsed: ${name} (Index: ${index}, Category: ${this.categoryMap[categoryIndex]}, Date: ${date})`);
            } else {
                console.log(`   ⚠️  Folder name doesn't match expected format: ${folderName}`);
                console.log(`   📝 Expected format: "12-BangBang (0-29.1.2005)"`);

                // Fallback for folders that don't match the expected format
                const projectId = parseInt(folderName.match(/^\d+/)[0]);
                const projectTitle = folderName.replace(/^\d+-/, '').replace(/-/g, ' ');

                projectData = {
                    id: projectId,
                    index: projectId,
                    title: projectTitle,
                    category: 'Unknown',
                    date: '1/1/2000',
                    folder: folderName,
                    files: files
                };
            }

            return projectData;

        } catch (error) {
            console.error(`❌ Error scanning ${folderName}:`, error.message);
            return null;
        }
    }
}

// Run the generator
const generator = new ProjectGenerator();
generator.generateProjectsJson();