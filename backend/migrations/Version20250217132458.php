<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250217132458 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE fashion (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(30) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE fashion_size (fashion_id INT NOT NULL, size_id INT NOT NULL, INDEX IDX_3B461182988D3F4B (fashion_id), INDEX IDX_3B461182498DA827 (size_id), PRIMARY KEY(fashion_id, size_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE size (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(30) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE fashion_size ADD CONSTRAINT FK_3B461182988D3F4B FOREIGN KEY (fashion_id) REFERENCES fashion (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fashion_size ADD CONSTRAINT FK_3B461182498DA827 FOREIGN KEY (size_id) REFERENCES size (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE fashion_size DROP FOREIGN KEY FK_3B461182988D3F4B');
        $this->addSql('ALTER TABLE fashion_size DROP FOREIGN KEY FK_3B461182498DA827');
        $this->addSql('DROP TABLE fashion');
        $this->addSql('DROP TABLE fashion_size');
        $this->addSql('DROP TABLE size');
    }
}
