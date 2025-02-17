<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250217135554 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_favorite (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, favorite_id INT NOT NULL, INDEX IDX_88486AD9A76ED395 (user_id), INDEX IDX_88486AD9AA17481D (favorite_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_favorite ADD CONSTRAINT FK_88486AD9A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_favorite ADD CONSTRAINT FK_88486AD9AA17481D FOREIGN KEY (favorite_id) REFERENCES favorite (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_favorite DROP FOREIGN KEY FK_88486AD9A76ED395');
        $this->addSql('ALTER TABLE user_favorite DROP FOREIGN KEY FK_88486AD9AA17481D');
        $this->addSql('DROP TABLE user_favorite');
    }
}
